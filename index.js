//require node packages
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const inquirer = require("inquirer");

//require files
const pageTemplate = require('./src/page-template.js');
const employee = require("./lib/Employee");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const manager = require("./lib/Manager");

// JY We are receiving that anonymous function from page-template.js
// JY Giving the name of pageTemplate

// JY And now, we can use that pageTemplate as a function, which can ACCEPT a parameter
pageTemplate(answers_from_inquirer_prompt);

//write Inquirer prompt
const questions = () => {
    //NOT SURE IF THESE ARE SUPPOSED TO GO HERE?
    // return inquire.prompt([
    //     {
    //         type: 'input',
    //         message: 'Please enter your team manager name:',
    //         name: 'name',
    //     },
    //     {
    //         type: 'input',
    //         message: 'Please enter your team manager ID:',
    //         name: 'id',
    //     },
    //     {
    //         type: 'input',
    //         message: 'Please enter your team manager email address:',
    //         name: 'email',
    //     },
    //     {
    //         type: 'input',
    //         message: 'Please enter your team manager office number:',
    //         name: 'office',
    //     },
    // ])
}


//write to file  
function writeToFile(fileName, data) {
    fs.writeFile(filename, data, err => {
        if (err) console.log(err)
    })
}

  

// JY THE DIST FOLDER IS WHERE THE OUTPUT HTML FILES WILL LAND


function runApp() {
 // JY ...Inquirer prompt and the functions that will ask users about manager, intern, and engineer.
    questions()
    .then(function buildTeam() {
    // JY Create the output directory if the output path doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
  })
  .then(writeToFile())
}
runApp();