function getSelectedDelete() {
    const table = document.getElementById("table");
    if (table) {
        const path = window.location.pathname;
        var page = path.split("/").pop().split(".")[0];
        var chks = table.getElementsByTagName("input");
        var selected = new Array();
        for (var i = 0; i < chks.length; i++) {
            if (chks[i].checked) {
                selected.push(chks[i]);
            }
        }

        function getId(n) {
            var row = n.parentNode.parentNode;
            var cols = row.getElementsByTagName("td");
            var id = cols[0].childNodes[0].nodeValue;
            return id;
        }
        localStorage.setItem("tablename", JSON.stringify(page));
        if (selected.length > 1) {
            alert("Error: cannot select more than 1 value to delete");
        } else if (selected.length == 1) {
            localStorage.setItem("id", JSON.stringify(getId(selected[0])));
            window.location.href = "delete.html";
        }
    } else alert("Table is empty, not deleting anything");
}