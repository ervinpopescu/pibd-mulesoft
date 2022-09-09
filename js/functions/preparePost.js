import config from "../config.js";

function preparePost() {
    const path = window.location.pathname;
    var page = path.split("/").pop().split(".")[0];
    const keys = config[page + "_keys"];
    const headers = config[page + "_headers"];
    keys.shift();
    headers.shift()
    if (document.getElementById("empty_error")) {
        alert("Table is empty, not modifying anything");
        return;
    } else if (document.getElementById("database_error")) {
        alert("Error contacting database");
        return;
    }
    localStorage.setItem("tablename", page);
    localStorage.setItem("headers", JSON.stringify(headers));
    localStorage.setItem("keys", JSON.stringify(keys));
    window.location.href = "add.html";
}

window.preparePost = preparePost;