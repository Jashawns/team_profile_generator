const Intern = require("../lib/intern");

test("Can set school", () => {
  const testing = "UMCP";
  const e = new Intern("Fake", 1, "fake@fake.com", testing);
  expect(e.school).toBe(testing);
});
