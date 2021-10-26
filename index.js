var inquirer = require('inquirer');

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'list',
        name: 'toDo',
        message: 'What would you like to do?',
        choices: ["View All Employees","Add Employee","Update Employee Role","View All Roles","Add Role","View All Departments","Add Department"]
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers)
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });