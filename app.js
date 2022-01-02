const inquirer = require('inquirer');
const cTable = require('console.table');

const startMenuQuestion = [
    {
        type: 'list',
        name: 'startMenuQuestion',
        message: 'What are you looking to do?',
        choices: [
            "Show all Roles",
            "Add an Intern",
            "There are no more team members to add"
        ]
    }
]

const startApp = async() => {
    console.log('Welcome to our Employee Tracker!');
    console.log('Choose an option to get started:');

    const result = await inquirer.prompt(startMenuQuestion)
    .then(function(result) {
        switch (result.startMenuQuestion) {
            case "Show all Roles":
                showAllRoles();
                break;

                case "Add an Intern":
                    break;

                    case "There are no more team members to add":
                        break;
        }
    })
}

startApp();