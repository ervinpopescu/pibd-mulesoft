function getSelectedPatch() {
    var selected = new Array();
    var keys = new Array();
    var headers = new Array();
    const path = window.location.pathname;
    var page = path.split("/").pop().split(".")[0];
    const table = document.getElementById("table");
    if (table) {
        var th = table.getElementsByTagName("th");
        var chks = table.getElementsByTagName("input");
        for (var i = 0; i < th.length - 1; i++) {
            if (!(th[i].id.includes("id"))) {
                keys.push(th[i].id);
                headers.push(th[i].textContent);
            }
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
        localStorage.setItem("tablename", JSON.stringify(page));
        if (selected.length > 1) {
            alert("Error: cannot select more than 1 value to modify");
        } else if (selected.length == 1) {
            var values = getRow(selected[0]);
            localStorage.setItem("headers", JSON.stringify(headers));
            localStorage.setItem("keys", JSON.stringify(keys));
            localStorage.setItem("values", JSON.stringify(values));
        }
        window.location.href = "modify.html";
    } else if (document.getElementById("empty_error")) {
        alert("Table is empty, not modifying anything");
    } else if (document.getElementById("database_error")) {
        alert("Error contacting database");
    }
}