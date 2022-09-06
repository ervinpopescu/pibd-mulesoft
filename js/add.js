function isEmpty(obj) {
    for(var prop in obj) {
      if(Object.prototype.hasOwnProperty.call(obj, prop)) {
        return false;
      }
    }
  
    return JSON.stringify(obj) === JSON.stringify({});
}

async function post(tablename) {
    var url = `http://localhost:8081/api/database/${tablename}`;
    const thisForm = document.getElementById('myForm');
    thisForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        const formData = new FormData(thisForm).entries();
        const json =Object.fromEntries(formData);
        Object.keys(json).forEach((key) => {
            if(json[key] === "")
                delete json[key]; 
        });
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(json)
        });

        const result = await response.json();
        console.log(result);
        if (!isEmpty(result))
            window.location.href=`http://localhost:5555/${tablename}.html`;
        else 
            alert("Please insert something into the fields!");
    });
}

var tablename = JSON.parse(localStorage.getItem("tablename"));
var headers = JSON.parse(localStorage.getItem("headers"));
var keys = JSON.parse(localStorage.getItem("keys"));
var values = JSON.parse(localStorage.getItem("values"));
var data = new Object();
if (values) {
    keys.forEach(function (element, index) {
        data[element] = values[index];
    });
    var form_div = document.getElementById("modify-form");
    var html = [];
    html.push("<form id='myForm'>");
    for (var i = 0; i < keys.length; i++) {
        html.push("<label for='" + keys[i] + "'>" + headers[i] + "</label><br>");
        html.push("<input type='text' id='" + keys[i] + "' name='" + keys[i] + "'><br>");
    }
    html.push(`<input type="submit" value="Submit">`)
    html.push("</form>");
    form_div.innerHTML = html.join("");
    await post(values[0], tablename);
    localStorage.removeItem("values");
    localStorage.removeItem("tablename");
    localStorage.removeItem("keys");
    localStorage.removeItem("headers");
}