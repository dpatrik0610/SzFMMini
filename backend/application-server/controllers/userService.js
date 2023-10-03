const getUserById = require('./UserServiceFunctions/getUserById');
const getUserByUsername = require('./UserServiceFunctions/getUserByUsername');
const getUserList = require('./UserServiceFunctions/getUserList');

// Export the collected functions as an object
module.exports = {
  getUserByUsername,
  getUserById,
  getUserList
};
