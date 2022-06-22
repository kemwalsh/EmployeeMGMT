USE employee_db;

-- Seed data for department table
INSERT INTO department (department_name)
VALUES  ("Sales"),
        ("Engineering"),
        ("Finance"),
        ("Legal");

-- Seed data for position table
INSERT INTO position (title, salary, department_id)
VALUES  ("Salesperson", 65000.00, 1),
        ("Engineer", 120000.00, 2),
        ("Bookkeeper", 80000.00, 3),
        ("Lawyer", 110000.00, 4);