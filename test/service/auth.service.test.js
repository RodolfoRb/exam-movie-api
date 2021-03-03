const userService = require("../../src/services/user.service");
const userModel = require("../../src/models/User");
const mockingoose = require('mockingoose').default;
jest.useFakeTimers();
test("error when username is falsy", async () => {
  let user = { username: "", password: "test" };
  expect(() => userService.registerUser(user)).rejects.toThrow();
});

test("error when password is falsy", async () => {
  let user = { username: "test", password: "" };
  expect(() => userService.registerUser(user)).rejects.toThrow();
});

test("register new user", async () => {
  let user = { username: "test1", password: "test1" };
  mockingoose(userModel).toReturn(user, 'save');
  expect(userService.registerUser(user)).resolves.toBeTruthy();
});
