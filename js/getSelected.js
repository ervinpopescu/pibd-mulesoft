function GetSelected() {
    var selected = new Array();
    var keys = new Array();
    var headers = new Array();
    var table = document.getElementById("table");
    var th = table.getElementsByTagName("th");
    var chks = table.getElementsByTagName("input");
    for (var i = 1; i < th.length - 1; i++) {
        keys.push(th[i].id);
        headers.push(th[i].textContent);
    }
    for (var i = 0; i < chks.length; i++) {
        if (chks[i].checked) {
            selected.push(chks[i]);
        }
    }
    function getRow(n) {
        var row = n.parentNode.parentNode;
        var cols = row.getElementsByTagName("td");
        var values = new Array();
        for (var i = 0; i < cols.length; i++) {
            var val = cols[i].childNodes[0].nodeValue;
            if (val != null) {
                values.push(val);
            }
        }
        return values;
    }
    if (selected.length > 1) {
        alert("Error: cannot select more than 1 value to modify");
    }
    else if (selected.length == 1) {
        var values = getRow(selected[0]);
        var path = window.location.pathname;
        var page = path.split("/").pop().split(".")[0];
        localStorage.setItem("headers", JSON.stringify(headers));
        localStorage.setItem("keys", JSON.stringify(keys));
        localStorage.setItem("values", JSON.stringify(values));
        localStorage.setItem("tablename", JSON.stringify(page));
    }
}