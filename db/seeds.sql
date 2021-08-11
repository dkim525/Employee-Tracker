INSERT INTO department (department_id, name)
VALUES (1, "Management");

INSERT INTO department (department_id, name)
VALUES (2, "Banking");

INSERT INTO department (department_id, name)
VALUES (3, "Service");

INSERT INTO department (department_id, name)
VALUES (4, "Investments");

INSERT INTO role (role_id, title, salary, department_id)
VALUES (1, "Branch Manager", 80000, 1);

INSERT INTO role (role_id, title, salary, department_id)
VALUES (2, "Service Manager", 60000, 1);

INSERT INTO role (role_id, title, salary, department_id)
VALUES (3, "Premier Banker", 100000, 2);

INSERT INTO role (role_id, title, salary, department_id)
VALUES (4, "Relationship Banker", 75000, 2);

INSERT INTO role (role_id, title, salary, department_id)
VALUES (5, "Personal Banker", 50000, 2);

INSERT INTO role (role_id, title, salary, department_id)
VALUES (6, "Lead Teller", 40000, 3);

INSERT INTO role (role_id, title, salary, department_id)
VALUES (7, "Teller", 35000, 3);

INSERT INTO role (role_id, title, salary, department_id)
VALUES (8, "Financial Advisor", 120000, 4);

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (1, "Nate", "Ryan", 1, NULL);

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (2, "Sierra", "Pemberton", 2, 1);

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (3, "Jerad", "Buckingham", 3, 1);

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (4, "Phil", "Wagner", 4, 1);

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (5, "Chris", "Balany", 5, 1); 

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (6, "Emily", "Palapa", 6, 2);

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (7, "Kajal", "Gul", 7, 2);

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (8, "Jesse", "Red", 8, 1);