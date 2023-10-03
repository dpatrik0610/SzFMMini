const getUserById = require('./UserController/getUserById');
const getUserByUsername = require('./UserController/getUserByUsername');
const getUserList = require('./UserController/getUserList');

// Export the collected functions as an object
module.exports = {
  getUserByUsername,
  getUserById,
  getUserList
};
