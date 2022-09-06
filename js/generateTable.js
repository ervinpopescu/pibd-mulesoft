export async function generateTable(data, table_selector, headers) {
    var html = [];
    var checkbox = "<input type='checkbox' name='checkbox'";
    var keys = Object.keys(data[0]);
    html.push("<table id='table' align='center' border='1'>\n<tbody>");
    html.push("<tr>");
    for (var i = 0; i < keys.length; i++)
        html.push("<th id='" + keys[i] + "'>" + headers[i] + "</th>");
    html.push(`<th>Choose</th>`)
    html.push("</tr>");
    data.forEach(function(item) {
        html.push("<tr>");
        for (var key in item) {
            if (!(key.includes("date")))
                html.push("<td>" + item[key] + "</td>");
            else
                html.push("<td>" + item[key].slice(0, 10));
        }
        html.push("<td id='checkbox'>" + checkbox + "value=" + "'" + item["id_course"] + "'/>" + "</td>")
        html.push("</tr>");
    });
    html.push("</table>\n</tbody>");
    document.getElementById(table_selector).innerHTML = html.join("");
}