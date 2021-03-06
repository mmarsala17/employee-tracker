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
            "Add Role",
            "Show Departments",
            "Add Department",
            "Show Employees",
            "Add Employee",
            "Update Employee"
        ]
    }
]

const addRoleQuestion = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title fo the new role?'
    },
    {
        type: 'input',
        name: 'salary',
        message: 'What is the salary of the new role?'
    },
    {
        type: 'input',
        name: 'department',
        message: 'What department is the new role in? use the number id!'
    }
]
const addDepartmentQuestion = [
    {
        type: 'input',
        name: 'name',
        message: 'What Department do you need to add?'
    }
]

const addEmployeeQuestions = [
    {
        type: 'input',
        name: 'first_name',
        message: 'What is the first name of the employee?'
    },
    {
        type: 'input',
        name: 'last_name',
        message: 'What is the last name of the employee?'
    },
    {
        type: 'input',
        name: 'role_id',
        message: 'What role is the employee in? Use the number ID!'
    },
    {
        type: 'input',
        name: 'manager_id',
        message: 'Who is the manager for the employee? use the number ID!'
    }
]

const chooseEmployeeQuestion = [
    {
        type: 'input',
        name: 'employee_id',
        message: 'Which employee do you need to update? Use number ID!'
    },
]

const updateEmployeeRoleQuestion = [
    {
        type: 'input',
        name: 'role_id',
        message: 'What new role do you need for your employee? use number ID!'
    },
]

const addRole = async() => {
    const result = await inquirer.prompt(addRoleQuestions)
    const sql = 'INSERT INTO role (title, salary, department_id) VALUES (?,?,?)';
    const params = [result.title, result.salary, result.department,];

    db.query(sql, params,function (err, results) {
        console.log("");
        console.table(results);
    });
    startMenu();
}

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

const addEmployee = async() => {
    const result = await inquirer.prompt(addEmployeeQuestions)
    const sql = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)';
    const params = [result.first_name, result.last_name, result.role_id, result.Manager_id];

    db.query(sql, params, function (err, results) {
        console.log("");
        console.table(resluts);
    });
    startMenu();
}
const startMenu = async() => {
    const result = await inquirer.prompt(startMenuQuestion)
    .then(function(result) {
        switch (result.startMenuQuestion) {
            case "Show all Roles":
                db.query('SELECT role.id, role.title, role.salary,  department.name AS department_name FROM role LEFT JOIN department ON role.department_id = department.id', function (err, results) {
                    console.log("");
                    console.table(results);
                });
                startMenu();
                break;

                case "Add Role":
                    db.query('SELECT role.id, role.title FROM role', function (err, results) {
                        console.log("");
                        console.table(results);
                    });
                    addRole();
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
                        db.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;", function (err, results) {
                            console.log("");
                            console.table(results);
                        });
                        startMenu();
                        break;

                        case "Add an Employee":
                            db.query('SELECT role.*, department.name AS department_name FROM role LEFT JOIN department ON role.department_id = department.id', function (err, results) {
                                console.log("");
                                console.table(results);
                            });
                            db.query('SELECT employee.*, role.title AS role_title FROM employee LEFT JOIN role ON employee.role_id = role.id', function (err, results) {
                                console.log("");
                                console.table(results);
                            });
                            addEmployee();
                            break;

                            case "Update Employee's role":
                                db.query('SELECT employee.id, employee.first_name, employee.last_name FROM employee', function (err, results){
                                    console.log("");
                                    console.table(results);
                                });
                                chooseEmployee();
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