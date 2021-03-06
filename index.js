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

//function that holds the entire application
function runApp() {
    //call createManager() first when application is deployed
    createManager()

    //function that produces manager prompts and stores the user input
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
        //push user input to blank membersArray
        ]).then(answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
            membersArray.push(manager);
            //send to confirm menu
            confirm();

        })
    };
    //allows the user to choose if they'd like to add to their team
    function confirm() {
        inquirer.prompt([
            {
                type: 'confirm',
                message: 'Would you like to add another employee?',
                name: 'confirm'
            }
        ]).then(answers => {
            //if Y, run employee menu. if n, run buildTeam()
            answers.confirm ? employeeMenu() : buildTeam()
        })
    }
    //gives user the option to specify which employee type they would like to add next
    function employeeMenu() {
        inquirer.prompt([
            {
                type: 'list',
                choices: ['Engineer', 'Intern'],
                message: 'What type of employee would you like to add?',
                name: 'employeeType'
            }

        ]).then(answers => {
            //if Engineer is selected, run createEngineer(), if Intern is selected, run createIntern()
            answers.employeeType === 'Engineer' ? createEngineer() : createIntern()
        })
    }

    //function that produces engineer prompts and stores the user input
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
        //push user input to membersArray
        ]).then(answers => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            membersArray.push(engineer);
            //send back to confirm menu
            confirm();
        });
    }

    //function that produces intern prompts and stores the user input
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
        //push user input to membersArray
        ]).then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            membersArray.push(intern);
            //send back to confirm menu
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



