-- Drops the employee_db if it exists currently --
DROP DATABASE IF EXISTS employee_db;
-- Creates the employee_db database --
CREATE DATABASE employee_db;

-- Makes it so all of the following code will affect employee_db --
USE employee_db;

-- Creates the table "department" within employee_db --
CREATE TABLE department (
  id INT AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30)
);

-- Creates the table "position" within employee_db --
CREATE TABLE position (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL(8,2),
  department_id INT,
  FOREIGN KEY (department_id)
  REFERENCES department(id)
  ON DELETE SET NULL
);

-- Creates the table "employee" within employee_db --
CREATE TABLE employee (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  position_id INT,
  manager_id INT,
  FOREIGN KEY (position_id)
  REFERENCES position(id)
  ON DELETE SET NULL
);