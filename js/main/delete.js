import config from "../config.js";

function isEmpty(obj) {
    for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
            return false;
        }
    }

    return JSON.stringify(obj) === JSON.stringify({});
}

async function del(id, tablename) {
    var msg_div = document.getElementById("delete-msg");
    var url = `${config["api_url"]}/${tablename}/${id}`;
    const json = { "id": id };
    const response = await fetch(url, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(json)
    });
    const result = await response.json();
    // console.log(result);
    if (!isEmpty(result)) {
        alert(result.message);
        window.location.href = `http://${window.location.host}/${tablename}.html`;
    } else
        alert("Delete failed");
}

const tablename = JSON.parse(localStorage.getItem("tablename"));
const id = JSON.parse(localStorage.getItem("id"));
const back_div = document.getElementById("back");
var html = [];
html.push("<h1>")
html.push("<a href='" + tablename + ".html" + "'>");
html.push("<img src='images/back.svg' alt='Back' width='18' height='18' /> Back");
html.push("</a>");
html.push("</h1>");
back_div.innerHTML = html.join("")
if (id) {
    html = [];
    await del(id, tablename);
    localStorage.removeItem("id");
    localStorage.removeItem("tablename");
}