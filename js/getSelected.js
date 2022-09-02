function GetSelected() {
    var selected = new Array();
    var table = document.getElementById("table");
    var th = table.getElementsByTagName("th");
    var keys = new Array();
    for (var i = 0; i < th.length; i++)
        keys.push(th[i].id);
    var chks = table.getElementsByTagName("input");
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
        values = getRow(selected[0]);
        localStorage.setItem("values", JSON.stringify(values));
    }
}