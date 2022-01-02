const inquirer = require('inquirer');
const roleRoutes = require('./routes/apiRoutes/roleRoutes')
const cTable = require('console.table');
const db = require('./db/connection');

const startMenuQuestion = [
    {
        type: 'list',
        name: 'startMenuQuestion',
        message: 'What are you looking to do?',
        choices: [
            "Show all Roles",
            "Show Departments",
            "Add Department",
            "Show Employees"
        ]
    }
]

const addDepartmentQuestion = [
    {
        type: 'input',
        name: 'name',
        message: 'What Department do you need to add?'
    }
]

const addDepartment = async() => {
    const result = await inquirer.prompt(addDepartmentQuestion)
    const sql = 'INSERT INTO department (name) VALUES (?)';
    const params = [result.name];

    db.query(sql, params, function (err, results) {
        console.log("");
        console.table(results);
    });
    startMenu();
}
const startMenu = async() => {
    const result = await inquirer.prompt(startMenuQuestion)
    .then(function(result) {
        switch (result.startMenuQuestion) {
            case "Show all Roles":
                db.query('SELECT role.*, department.name AS department_name FROM role LEFT JOIN department ON role.department_id = department.id', function (err, results) {
                    console.log("");
                    console.table(results);
                });
                startMenu();
                break;

                case "Show Departments":
                    db.query('SELCET * FROM department', function (err, results){
                        console.log("");
                        console.table(results);
                    });
                    startMenu();
                    break;

                    case "Add Department":
                        addDepartment();
                        break;
                        
                    case "Show Employees":
                        db.query('SELECT employee.*, role.title AS role_title FROM employee LEFT JOIN role ON employee.role_id = role.id', function (err, results) {
                            console.log("");
                            console.table(results);
                        });
                        startMenu();
                        break;
        }
    });
}

const startApp = async() => {
    console.log('Welcome to our Employee Tracker!');
    console.log('Choose an option below:');

    startMenu();
}

startApp();