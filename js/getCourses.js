import { doGet } from "./doGet.js";
import config from "../config.js";

doGet("courses", config["courses_keys"], config["courses_headers"]);