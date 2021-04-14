const Engineer = require("../lib/Engineer");

describe("Check for engineer class", () => {
    it('should be an object', () => {
        const engineerObject = new Engineer();

        expect(typeof(engineerObject)).toBe('object');
    })

    it('should take in a name', () => {
        const name = "Joe"

        const engineerObject = new Engineer("Joe");

        expect(engineerObject.name).toBe(name);
    })
})