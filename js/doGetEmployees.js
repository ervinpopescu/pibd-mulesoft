import { doGet } from "./doGet.js";
import { generateTable } from "./generateTable.js";

var keys = [
    "id_employee",
    "first_name",
    "last_name",
    "cnp",
    "salary",
    "position",
    "birth_date"];
var headers = [
    "ID",
    "First Name",
    "Last Name",
    "CNP",
    "Salary",
    "Position",
    "Birth date",
    "Choose"];
doGet("employees", generateTable, keys, headers);