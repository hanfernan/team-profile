const Intern = require("../lib/Intern");

describe("Check for intern class", () => {
    it('should be an object', () => {
        const internObject = new Intern();

        expect(typeof(internObject)).toBe('object');
    })

    it('should take in a name', () => {
        const name = "Joe"

        const internObject = new Intern("Joe");

        expect(internObject.name).toBe(name);
    })
})