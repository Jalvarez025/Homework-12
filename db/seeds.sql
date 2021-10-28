USE company_db;

INSERT INTO department (name)
VALUES ("Software Development"),
       ("Managment"),
       ("Business");

INSERT INTO role (title, salary, department_id)
VALUES ("Engineer", "100000", "Software Development"),
       ("Manager", "110000", "Managment"),
       ("Intern", "45000", "Software Development"),
       ("Sales", "70000", "Business"),
       ("HR", "50000", "Business");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Elliot", "Smith", "Engineer", "NotManager"),
       ("Amira", "Afzal", "Engineer", "NotManager"),
       ("Christoper", "Lee", "Engineer", "NotManager"),
       ("Verónica", "Rodriguez", "Engineer", "NotManager"),
       ("Igor", "Stein", "Engineer", "NotManager");



