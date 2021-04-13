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
// JY We are receiving that anonymous function from page-template.js
// JY Giving the name of pageTemplate

// JY And now, we can use that pageTemplate as a function, which can ACCEPT a parameter
pageTemplate(answers_from_inquirer_prompt);


// JY THE DIST FOLDER IS WHERE THE OUTPUT HTML FILES WILL LAND


function runApp() {
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
            const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNum);
            console.log(manager);
            membersArray.push(manager);
            console.log(membersArray);
            //how can I store this info based on role?
            //where can I store it to call it later on?
            buildTeam();

        })
    }
    function buildTeam() {
        //Create the output directory if the output path doesn't exist
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(membersArray), "utf-8");
    }


}
runApp();








//write to file  
// function writeToFile(fileName, data) {
//     fs.writeFile(filename, data, err => {
//         if (err) console.log(err)
//     })
// }