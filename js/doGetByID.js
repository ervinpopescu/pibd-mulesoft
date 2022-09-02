export default function doGetByID(id) {
    var json;
    uri = "http://localhost:8081/api/database/courses/" + id;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", uri, true);
    xhr.setRequestHeader("Accept", "application/json");
    // xhr.setRequestHeader("Content-Type", "application/json");
    // var data = `
    // {
    //         "teacher": "Valentin Pupezescu",
    //         "title": "PIBD"
    // }`
    xhr.send(null);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            json = JSON.parse(xhr.responseText);
            //console.log(xhr.responseText);
            loadData(json);
        }
    };
}