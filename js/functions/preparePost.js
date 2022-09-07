import config from "../config.js";

function preparePost() {
    const path = window.location.pathname;
    var page = path.split("/").pop().split(".")[0];
    const keys = config[page + "_keys"];
    const headers = config[page + "_headers"];
    keys.shift();
    headers.shift()
    localStorage.setItem("tablename", page);
    localStorage.setItem("headers", JSON.stringify(headers));
    localStorage.setItem("keys", JSON.stringify(keys));
    window.location.href = "add.html";
}

window.preparePost = preparePost;