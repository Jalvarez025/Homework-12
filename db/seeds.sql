USE company_db;

INSERT INTO department (name)
VALUES ("Software Development"),
       ("Managment"),
       ("Business");

INSERT INTO role (title, salary, department_id)
VALUES ("Engineer", 100000, 1),
       ("Manager", 110000, 2),
       ("Intern", 45000, 3),
       ("Sales", 70000, 4),
       ("HR", 50000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Elliot", "Smith", 1, NULL),
       ("Amira", "Afzal", 2, NULL),
       ("Christoper", "Lee", 3, NULL),
       ("Verónica", "Rodriguez", 4, NULL),
       ("Igor", "Stein", 5, 1);



