const { UserRepository } = require('../../models/UserRepository');
const userRepository = new UserRepository();

async function getUserById(req, res) {
  try {
    const { userId } = req.params;
    const user = await userRepository.getUserById(userId);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = getUserById;
