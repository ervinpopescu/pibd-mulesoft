import { doGet } from "./doGet.js";
import config from "../config.js";

doGet("enrollments", config["enrollments_keys"], config["enrollments_headers"]);