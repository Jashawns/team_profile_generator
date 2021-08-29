const Employee = require("../lib/employee");

describe("Employee", () => {
    it("Can generate Employee", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });
});