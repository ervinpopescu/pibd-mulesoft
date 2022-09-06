import { doGet } from "./doGet.js";

var keys = [
    "id_course",
    "teacher",
    "title"
];
var headers = [
    "ID",
    "Teacher",
    "Title"
];

doGet("courses", keys, headers);