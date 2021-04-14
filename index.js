//require node packages
const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");

//constants for storing output
const OUTPUT_DIR = path.resolve(__dirname, "dist");
//above creates a directory name called "dist"
const outputPath = path.join(OUTPUT_DIR, "team.html");
//above creates team.html in dist folder

//require files
const pageTemplate = require('./src/page-template.js');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//empty array to store members
const membersArray = [];

function runApp() {
    createManager()
    function createManager() {
        inquirer.prompt([
            {
                type: 'input',
                message: "Please enter your team manager's name:",
                name: 'name',
            },
            {
                type: 'input',
                message: "Please enter your team manager's ID:",
                name: 'id',
            },
            {
                type: 'input',
                message: "Please enter your team manager email address:",
                name: 'email',
            },
            {
                type: 'input',
                message: "Please enter your team manager office number:",
                name: 'office',
            },
        ]).then(answers => {
            console.log(answers);
            const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
            console.log(manager);
            membersArray.push(manager);
            console.log(membersArray);
            employeeMenu();

        })
    };
    function confirm() {
        inquirer.prompt([
            {
                type: 'confirm',
                message: 'Would you like to add another employee?',
                name: 'confirm'
            }
        ]).then(answers => {
            answers.confirm ? employeeMenu() : buildTeam()
        })
    }
    function employeeMenu() {
        inquirer.prompt([
            {
                type: 'list',
                choices: ['Engineer', 'Intern'],
                message: 'What type of employee would you like to add?',
                name: 'employeeType'
            }
        ]).then(answers => {
            answers.employeeType === 'Engineer' ? createEngineer() : createIntern()
        })
    }

    function createEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                message: 'Please enter your engineer name:',
                name: 'name',
            },
            {
                type: 'input',
                message: 'Please enter your engineer ID:',
                name: 'id',
            },
            {
                type: 'input',
                message: 'Please enter your engineer email address:',
                name: 'email',
            },
            {
                type: 'input',
                message: 'Please enter your engineer GitHub username:',
                name: 'github',
            },
        ]).then(answers => {
            console.log(answers);
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            console.log(engineer);
            membersArray.push(engineer);
            console.log(membersArray);
            confirm();
        });
    }

    function createIntern() {
        inquirer.prompt([
            {
                type: 'input',
                message: 'Please enter your intern name:',
                name: 'name',
            },
            {
                type: 'input',
                message: 'Please enter your intern ID:',
                name: 'id',
            },
            {
                type: 'input',
                message: 'Please enter your intern email address:',
                name: 'email',
            },
            {
                type: 'input',
                message: 'Please enter your intern school:',
                name: 'school',
            },
        ]).then(answers => {
            console.log(answers);
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            console.log(intern);
            membersArray.push(intern);
            console.log(membersArray);
            confirm();
        });

    }

    function buildTeam() {
        //Create the output directory if the output path doesn't exist
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, pageTemplate(membersArray), "utf-8");
    }
}
runApp();



