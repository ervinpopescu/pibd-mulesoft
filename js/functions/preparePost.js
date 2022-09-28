import config from "../config.js";

function preparePost() {
    var path = window.location.pathname;
    var page = path.split("/").pop().split(".")[0];
    var keys = config[page + "_keys"];
    var headers = config[page + "_headers"];
    keys.shift();
    headers.shift()
    if (document.getElementById("database_error")) {
        alert("Error contacting database");
        return;
    }
    localStorage.setItem("tablename", page);
    localStorage.setItem("headers", JSON.stringify(headers));
    localStorage.setItem("keys", JSON.stringify(keys));
    window.location.href = "add.html";
}

window.preparePost = preparePost;