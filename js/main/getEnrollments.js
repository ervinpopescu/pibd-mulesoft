import { doGet } from "../functions/doGet.js";
import config from "../config.js";

doGet("enrollments", config["enrollments_keys"], config["enrollments_headers"]);