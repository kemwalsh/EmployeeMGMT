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