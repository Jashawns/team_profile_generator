const Manager = require("../lib/manager");

test("Can set office number", () => {
  const testing = 11505;
  const e = new Manager("Fake", 1, "fake@fake.com", testing);
  expect(e.officeNumber).toBe(testing);
});
