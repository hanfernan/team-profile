const Manager = require("../lib/Manager");

describe("Check for manager class", () => {
    it('should be an object', () => {
        const managerObject = new Manager();

        expect(typeof(managerObject)).toBe('object');
    })

    it('should take in a name', () => {
        const name = "Joe"

        const managerObject = new Manager("Joe");

        expect(managerObject.name).toBe(name);
    })
})