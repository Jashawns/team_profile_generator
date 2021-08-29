const Engineer = require("../lib/engineer");

test("Can set GitHUb account", () => {
  const testing = "FakeUser";
  const e = new Engineer("Fake", 1, "fake@fake.com", testing);
  expect(e.github).toBe(testing);
});
