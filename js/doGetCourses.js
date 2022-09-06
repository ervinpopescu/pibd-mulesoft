import { doGet } from "./doGet.js";
import { generateTable } from "./generateTable.js";

var keys = [
    "id_course",
    "teacher",
    "title"];
var headers = [
    "ID",
    "Teacher",
    "Title"];

doGet("courses", generateTable, keys, headers);