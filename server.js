// Import and require inquirer, mysql2, and console.table
const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: '',
    database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
);

let departmentArray = [];
db.query("SELECT * from department", (err, result) => {
    if (err) {
        console.log(err);
        }
        for (let res of result) {
            departmentArray.push(res)
        }
});

let positionArray = [];
db.query("SELECT * from position", (err, result) => {
    if (err) {
        console.log(err);
        }
        for (let res of result) {
            positionArray.push(res.title)
        }
});

let employeeArray = [];
db.query("SELECT * from employee", (err, result) => {
    if (err) {
        console.log(err);
        }
        for (let res of result) {
            employeeArray.push(res)
        }
});