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

-- Seed data for employee table
INSERT INTO employee (first_name, last_name, position_id, manager_id)
VALUES  ("Mike", "Frank", 1, NULL),
        ("Lori", "Michael", 1, 1),
        ("Betty", "Smith", 2, NULL),
        ("Stan", "Watkins", 2, 3),
        ("Salvador", "Thornton", 3, NULL),
        ("Luigi", "Blanchard", 3, 5),
        ("Eileen", "Miranda", 4, NULL),
        ("Scottie", "Coleman", 4, 7);