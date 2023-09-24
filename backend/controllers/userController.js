const createUser = require('./UserController/createUser');
const getUserById = require('./UserController/getUserById');
const getUserByUsername = require('./UserController/getUserByUsername');
const getUserList = require('./UserController/getUserList');

// Export the collected functions as an object
module.exports = {
  createUser,
  getUserByUsername,
  getUserById,
  getUserList
};
