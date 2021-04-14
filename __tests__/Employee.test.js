//IMPORT THE FILE TO BE TESTED
const Employee = require('../lib/Employee');

describe("Check for employee class", () => {
    it('should be an object', () => {
        const employeeObject = new Employee();

        expect(typeof(employeeObject)).toBe('object');
    })

    it('should take in a name', () => {
        const name = "Joe"

        const employeeObject = new Employee("Joe");

        expect(employeeObject.name).toBe(name);
    })
})