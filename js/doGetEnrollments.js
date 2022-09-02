import { doGet } from "./doGet.js";
import { generateTable } from "./generateTable.js";

var keys = [
    "id_enrollment",
    "id_course",
    "id_employee",
    "date",
    "cost"];
var headers = [
    "ID enrollment",
    "ID course",
    "ID employee",
    "Date",
    "Cost"];
doGet("enrollments", generateTable, keys, headers);