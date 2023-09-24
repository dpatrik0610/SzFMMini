const registerUser = require('./UserController/registerUser');
const getUserById = require('./UserController/getUserById');
const getUserByUsername = require('./UserController/getUserByUsername');
const getUserList = require('./UserController/getUserList');
const loginUser = require('./UserController/loginUser');
const logoutUser = require('./UserController/logoutUser');
const doesUsernameExist = require('./UserController/checkUserNameExists');

// Export the collected functions as an object
module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  getUserByUsername,
  getUserById,
  getUserList,
  doesUsernameExist
};
