
class Engineer {
    
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}
const engineerQuestions = () => {
    return inquire.prompt([
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
    ])
}