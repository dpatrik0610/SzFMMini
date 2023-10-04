const registerUser = require('./AuthServiceFunctions/registerUser');
const loginUser = require('./AuthServiceFunctions/loginUser');
const doesUsernameExist = require('./AuthServiceFunctions/checkUserNameExists');
const logoutUser = require('./AuthServiceFunctions/logoutUser');

// Export the collected functions as an object
module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  doesUsernameExist
};
