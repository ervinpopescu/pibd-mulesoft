function patch(id, tablename) {
    var url = `http://localhost:8081/api/database/${tablename}/${id}`;
    const thisForm = document.getElementById('myForm');
    thisForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        const formData = new FormData(thisForm).entries();
        const json =Object.fromEntries(formData);
        console.log(json);
        const response = await fetch(url, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(json)
        });

        const result = await response.json();
        console.log(result);
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
    // console.log(tablename, "\n", keys, "\n", values, "\n", headers);
    var form_div = document.getElementById("modify-form");
    var html = [];
    html.push("<form id='myForm'>");
    for (var i = 0; i < keys.length; i++) {
        html.push("<label for='" + keys[i] + "'>" + headers[i] + "</label><br>");
        html.push("<input type='text' id='" + keys[i] + "' name='" + keys[i] + "'><br>");
    }
    // Object.keys(data).forEach(function (item) {
    //     html.push("<tr>");
    //     for (var key in item) {
    //         html.push("<td>" + item[key] + "</td>");
    //     }
    //     html.push("</tr>");
    // });
    html.push(` <input type="submit" value="Submit">`)
    html.push("</form>");
    form_div.innerHTML = html.join("");
    // console.log(html.join(""));
    patch(values[0], tablename);
    localStorage.removeItem("values");
    localStorage.removeItem("tablename");
    localStorage.removeItem("keys");
    localStorage.removeItem("headers");
}