const courses_keys = [
    "id_course",
    "teacher",
    "title"
];
const courses_headers = [
    "ID",
    "Teacher",
    "Title"
];

const employees_keys = [
    "id_employee",
    "first_name",
    "last_name",
    "cnp",
    "salary",
    "position",
    "birth_date"
];
const employees_headers = [
    "ID",
    "First Name",
    "Last Name",
    "CNP",
    "Salary",
    "Position",
    "Birth date",
    "Choose"
];

const enrollments_keys = [
    "id_enrollment",
    "id_course",
    "id_employee",
    "date",
    "cost"
];
const enrollments_headers = [
    "ID enrollment",
    "ID course",
    "ID employee",
    "Date",
    "Cost"
];

const config = {
    "api_url": "http://192.168.1.209:8081/api/database",
    "courses_keys": courses_keys,
    "courses_headers": courses_headers,
    "employees_keys": employees_keys,
    "employees_headers": employees_headers,
    "enrollments_keys": enrollments_keys,
    "enrollments_headers": enrollments_headers
};

export default config;