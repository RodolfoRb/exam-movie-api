const User = require("../models/User");
const userRepository = {};
userRepository.findByUsername = async (username) => {
  return await User.findOne({ username: username });
};
userRepository.createUser = async (userObj) => {
  const user = new User(userObj);
  return await user.save();
};
module.exports = userRepository;
