import config from "../config.js";
import {
    generateTable
} from "./generateTable.js";

export function doGet(table, keys_arr, headers) {
    var table_selector = "table_" + table;
    var uri = config["api_url"] + table;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", uri, true);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.send(null);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            try {
                var array = JSON.parse(xhr.responseText);
                if (array.length != 0) {
                    var data = new Array();
                    array.forEach(function(object, index) {
                        data.push(new Object());
                        keys_arr.forEach(function(key_from_array) {
                            Object.keys(object).forEach(function(key_from_database) {
                                if (key_from_array == key_from_database)
                                    data[index][key_from_array] = object[key_from_database];
                            });
                        });
                    });
                    generateTable(data, table_selector, headers);
                } else {
                    var divopen = `<div id="error">`;
                    document.getElementById(table_selector).innerHTML = divopen + "Table is empty" + "</div>";
                }
            } catch {
                var divopen = `<div id="error">`;
                document.getElementById(table_selector).innerHTML = divopen + "Error contacting database" + "</div>";
            }
        }
    }
}