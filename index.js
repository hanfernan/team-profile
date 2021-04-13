//require node packages
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const inquirer = require("inquirer");

//require files
const pageTemplate = require('./src/page-template.js');
const engineer = require("./Engineer");
const intern = require("./Intern");
const manager = require("./Manager");

// JY We are receiving that anonymous function from page-template.js
// JY Giving the name of pageTemplate

// JY And now, we can use that pageTemplate as a function, which can ACCEPT a parameter
pageTemplate(answers_from_inquirer_prompt);

//Inquirer prompt
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the employee name?',
            name: 'name',
        },
        {
            type: 'list',
            message: 'What is the employee position?',
            name: 'id',
            choices: ['Engineer', 'Manager', 'Intern']
        }
        {
            type: 'input',
            message: 'What is the employee email address?',
            name: 'email',
        }
    ])
    .then()
// JY THIS IS WHERE YOU DO YOUR FS WRITEFILE STUFF

// JY THE DIST FOLDER IS WHERE THE OUTPUT HTML FILES WILL LAND


function runApp() {
 // JY ...Inquirer prompt and the functions that will ask users about manager, intern, and engineer.
  function buildTeam() {
    // JY Create the output directory if the output path doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
  }
}
runApp();