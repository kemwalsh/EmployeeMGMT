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

let roleArray = [];
db.query("SELECT * from role", (err, result) => {
    if (err) {
        console.log(err);
        }
        for (let res of result) {
            roleArray.push(res.title)
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



// Array of prompts for Readme Generator
// const prompt = () => {
//     return inquirer.prompt([
//         {
//             type: 'list',
//             message: 'Which would you like to do?',
//             choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'Add Role', 'View All Departments', 'Add Department', 'Quit'],
//         },
//         {
//             type: 'input',
//             message: 'What is the name of the department?',
//         },
//         {
//             type: 'input',
//             message: 'What is the name of the role?',
//         },
//         {
//             type: 'input',
//             message: 'What is the salary of the role?',
//         },
//         {
//             type: 'list',
//             message: 'What department does the role belong to?',
//             choices: ['Sales', 'Engineering', 'Finance', 'Legal'],
//         },
//         {
//             type: 'input',
//             message: 'What is the employees first name?',
//         },
//         {
//             type: 'input',
//             message: 'What is the employees last name?',
//         },
//         {
//             type: 'list',
//             message: 'What is the employees role?',
//             choices: ['Salesperson', 'Sales Manager', 'Engineer', 'Lead Engineer', 'Bookkeeper', 'Finance Manager', 'Lawyer', 'Legal Team Lead'],
//         },
//         {
//             type: 'list',
//             message: 'Who is the employees manager?',
//             // How to add all managers
//             choices: ['Mike Frank', 'Betty Smith', 'Salvador Thornton', 'Eileen Blanchard'],
//         },
//         {
//             type: 'list',
//             message: 'What employee do you want to update?',
//             // how to add all employees
//             choices: ['Mike Frank', 'Betty Smith', 'Salvador Thornton', 'Eileen Blanchard'],
//         },
//         {
//             type: 'list',
//             message: 'What role do you want to assign the employee?',
//             // how to add all roles
//             choices: ['Mike Frank', 'Betty Smith', 'Salvador Thornton', 'Eileen Blanchard'],
//         },
//         {
//             // How to do this
//             type: 'list',
//             message: 'View All Employees?',
//             // how to add all employees
//             choices: ['Mike Frank', 'Betty Smith', 'Salvador Thornton', 'Eileen Blanchard'],
//         },
//         {
//             type: 'input',
//             message: 'What is the name of the employee?',
//         },
        
//     ])
//     }