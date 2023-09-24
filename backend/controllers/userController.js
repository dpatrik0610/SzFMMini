const { UserRepository } = require('./UserRepository');
const userRepository = new UserRepository();

class UserController {
  async createUser(newUser) {
    try {
      const result = await userRepository.createUser(newUser);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getUserById(userId) {
    try {
      const user = await userRepository.getUserByIdOrNull(userId);
      return user;
    } catch (error) {
      throw error;
    }
  }

}

module.exports = UserController;
