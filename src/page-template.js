// generate the HTML pages
const generateTeam = team => {
    // A method for a template to render manager info
    const generateIntern = intern => {
        return `
        <div class='card m-3'>
        <div class="card-header p-2 ">
            <h5 class="card-title">${intern.getName()}</h5>
            <h6 class="card-subtitle">Intern</h6>
        </div>
        <div class="card-body p-2">
            <p>Email: <a href="mailto:${intern.getEmail()}" target="_blank">${intern.getEmail()}</a></p>
            <p>ID: ${intern.getId()}</p>
            <p>School: ${intern.getSchool()}</p>
        </div>
        </div>`
    }
    // A method for a template to render engineer info
    const generateEngineer = engineer => {
        return `
        <div class='card m-3'>
        <div class="card-header p-2">
            <h5 class="card-title">${engineer.getName()}</h5>
            <h6 class="card-subtitle">Engineer</h6>
        </div>
        <div class="card-body p-2">
            <p>Email: <a href="mailto:${engineer.getEmail()}" target="_blank">${engineer.getEmail()}</a></p>
            <p>ID: ${engineer.getId()}</p>
            <p>Github: <a href="https://github.com/${engineer.getGitHub()}" target="_blank">${engineer.getGitHub()}</a></p>
        </div>
        </div>`
    }
    // A method for a template to render intern info
    const generateManager = manager => {
        console.log(manager + "line 25")
        return `
        <div class='card m-3'>
        <div class="card-header p-2">
            <h5 class="card-title">${manager.getName()}</h5>
            <h6 class="card-subtitle">Manager</h6>
        </div>
        <div class="card-body p-2">
            <p>Email: <a href="mailto:${manager.getEmail()}" target="_blank">${manager.getEmail()}</a></p>
            <p>ID: ${manager.getId()}</p>
            <p>Office Number: ${manager.getOfficeNumber()}</p>
        </div>
        </div>`
    }

    //array to store employees
    const html = [];
    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
    );
    return html.join("");
}

// We are exporting out an anonymous function

//generate the HTML page
module.exports = team => {
    return `
   <!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
   integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
   <title>Team Profile Generator</title>
</head>
<body>
   <div class="container-fluid">
       <div class="row">
           <div class="col-12 jumbotron mb-3 team-heading">
               <h1 class="text-center">My Team</h1>
           </div>
       </div>
   </div>
   <div class="container">
       <div class="row">
           <div class="team-area col-12 d-flex justify-content-center">
               ${generateTeam(team)}
           </div>
       </div>
   </div>
</body>
</html>
   `
}