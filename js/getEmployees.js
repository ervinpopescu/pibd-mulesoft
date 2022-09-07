import { doGet } from "./doGet.js";
import config from "../config.js";

doGet("employees", config["employees_keys"], config["employees_headers"]);