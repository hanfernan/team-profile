// generate the HTML pages
const generateTeam = team => {
    // A method for a template to render manager info
    const generateIntern = intern => {
        return `
        <div class='card'>
        <p>${intern.getName()}</p>
        <p>${intern.getEmail()}</p>
        <p>${intern.getId()}</p>
        <p>${intern.getGitHub()}</p>
        </div>`
    }
    // A method for a template to render engineer info
    const generateEngineer = engineer => {
        return `
        <div class='card'>
        <p>${engineer.getName()}</p>
        <p>${engineer.getEmail()}</p>
        <p>${engineer.getId()}</p>
        <p>${engineer.getGitHub()}</p>
        </div>`
    }
    // A method for a template to render intern info
    const generateManager = manager => {
        console.log(manager + "line 25")
        return `
        <div class='card'>
        <p>${manager.getName()}</p>
        <p>${manager.getEmail()}</p>
        <p>${manager.getId()}</p>
        <p>${manager.getOfficeNumber()}</p>
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
               YOUR METHOD GOES HERE THE CARDS OF MANAGER, INTERN, ENGINEER WILL BE. 
               ${generateTeam(team)}
           </div>
       </div>
   </div>
</body>
</html>
   `
}