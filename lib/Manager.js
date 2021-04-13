class Manager {
    
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

const managerQuestions = () => {
    return inquire.prompt([
        {
            type: 'input',
            message: 'Please enter your team manager name:',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Please enter your team manager ID:',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Please enter your team manager email address:',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Please enter your team manager office number:',
            name: 'office',
        },
    ])
}