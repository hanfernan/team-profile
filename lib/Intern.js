class Intern {
    
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}
function createIntern() {
    inquire.prompt([
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
    ])
}