import { doGet } from "../functions/doGet.js";
import config from "../config.js";

doGet("employees", config["employees_keys"], config["employees_headers"]);