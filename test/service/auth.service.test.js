const userService = require("../../src/services/user.service");

test("register new user", async () => {
  let user = { username: "", password: "" };
  let result;
  try {
    result =  await userService.registerUser(user);   
  } catch (error) {
      
  }
  expect(result).toBeUndefined();
});
