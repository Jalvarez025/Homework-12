var inquirer = require('inquirer');
const DB = require("./db/")

function questions(){
  inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: 'list',
      name: 'toDo',
      message: 'What would you like to do?',
      choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department", "Quit"]
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    process(answers)
    //console.log(answers)
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}



function process(answers) {
  console.log(answers.toDo)
  switch (answers.toDo) {
    case 'View All Employees':
      viewEmployees();
      break;
    case 'Add Employee':
      addEmployee();
      break;
    case 'Update Employee Role':
      updateRole();
      break;
    case 'View All Roles':
      db.query('SELECT * FROM role', function (err, results) {
        console.log(results);
      });
      questions();
      break;
    case 'Add Role':
      addRole();
      break;
    case 'View All Departments':
      db.query('SELECT * FROM department', function (err, results) {
        console.log(results);
      });
      questions();
      break;
    case 'Add Department':
      addDepartment();
      break;
    case 'Quit':
      exit();
      break;
  }
}

const allEmployees = [];
const allDepartments = [];
const allRoles = [];
const allManagers = [];

async function viewEmployees(){
  const employees = await db.findAllEmployees()
  console.table(employees)
  questions()
}

function addDepartment() {
  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: 'input',
        name: 'departmentName',
        message: 'What is the department name?'
      }
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
      // code block
      console.log(answers)
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

function addRole() {

  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: 'input',
        name: 'roleName',
        message: 'What is the name of this role?',
      },
      {
        type: 'input',
        name: 'roleSalary',
        message: 'What is the salary of this role?',
      },
      {
        type: 'list',
        name: 'roleDepartment',
        message: 'Which department does this role belong to?',
        choices: allDepartments
      }
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
      // code block
      console.log(answers)
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

function addEmployee() {

  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: 'input',
        name: 'employeeFirstName',
        message: 'What is the employees first name?',
      },
      {
        type: 'input',
        name: 'employeeLastName',
        message: 'What is the employees last name?',
      },
      {
        type: 'list',
        name: 'employeeRole',
        message: 'What is the employees role?',
        choices: allRoles
      },
      {
        type: 'list',
        name: 'employeeManager',
        message: 'Who is the employees manager?',
        choices: allManagers
      }
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
      // code block
      console.log(answers)
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

function updateRole() {
  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: 'list',
        name: 'employeeUpdate',
        message: 'Which employees role do you want to update?',
        choices: allEmployees
      },
      {
        type: 'list',
        name: 'updatedRole',
        message: 'Which role do you want to assign the selected employee?',
        choices: allRoles
      }
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
      // code block
      console.log(answers)
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

questions();