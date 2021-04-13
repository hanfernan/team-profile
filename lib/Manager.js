const Employee = require('./Employee');


class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        //linked to constructor in Employee.js
        super(name, id, email);
        //get office number seperately since it is not a part of Employee.js
        this.officeNumber = officeNumber;
        
    }

    //other get methods are inherited, but specifying getRole here overwrites the getRole() from the employee class
    getRole() {
        return "Manager";
    }
    //get office number since it is not inherited from Employee class
    getOfficeNumber() {
        return this.officeNumber;
    }
}

//export out Manager
module.exports = Manager;