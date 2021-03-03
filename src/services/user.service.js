const userRepository = require("../repository/user.repository");

const userService = {};
userService.login = async (user) => {
  let result = null;
  let usersbd = await userRepository.findByUsername(user.username);
  let isMatch = await usersbd.comparePassword(user.password);
  if (isMatch) {
    result = usersbd;
  } else {
    result = null;
  }
  return result;
};
userService.registerUser = async (user) => {
  if (!user.username) {
    throw new Error("The username is required");
  }
  if (!user.password) {
    throw new Error("The password is required");
  }
  let users = await userRepository.createUser(user);
  return users;
};
module.exports = userService;
