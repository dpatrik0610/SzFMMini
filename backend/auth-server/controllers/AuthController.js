const registerUser = require('./AuthControllers/registerUser');
const loginUser = require('./AuthControllers/loginUser');
const logoutUser = require('./AuthControllers/logoutUser');
const doesUsernameExist = require('./AuthControllers/checkUserNameExists');

// Export the collected functions as an object
module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  doesUsernameExist
};
