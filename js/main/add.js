import config from "../config.js";

function isEmpty(obj) {
    for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
            return false;
        }
    }

    return JSON.stringify(obj) === JSON.stringify({});
}

async function post(tablename) {
    var url = `${config["api_url"]}/${tablename}`;
    const thisForm = document.getElementById('myForm');
    thisForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const formData = new FormData(thisForm).entries();
        const json = Object.fromEntries(formData);
        Object.keys(json).forEach((key) => {
            if (json[key] === "")
                delete json[key];
        });
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(json)
        });

        const result = await response.json();
        // console.log(result);
        if (!isEmpty(result)) {
            alert(result.message);
            window.location.href = `http://${window.location.host}/${tablename}.html`;
        } else
            alert("Please insert something into the fields!");
    });
}

const tablename = localStorage.getItem("tablename");
const headers = JSON.parse(localStorage.getItem("headers"));
const keys = JSON.parse(localStorage.getItem("keys"));
const back_div = document.getElementById("back");
const form_div = document.getElementById("add-form");

var html = [];
html.push("<h1>")
html.push("<a href='" + tablename + ".html" + "'>");
html.push("<img src='images/back.svg' alt='Back' width='18' height='18' /> Back");
html.push("</a>");
html.push("</h1>");
back_div.innerHTML = html.join("");

html = [];
html.push("<form id='myForm'>");
for (var i = 0; i < keys.length; i++) {
    html.push("<label for='" + keys[i] + "'>" + headers[i] + "</label><br>");
    html.push("<input type='text' id='" + keys[i] + "' name='" + keys[i] + "'><br>");
}
html.push(`<input type="submit" value="Submit">`)
html.push("</form>");
form_div.innerHTML = html.join("");
const result = await post(tablename);
// console.log(result);
localStorage.removeItem("values");
localStorage.removeItem("tablename");
localStorage.removeItem("keys");
localStorage.removeItem("headers");