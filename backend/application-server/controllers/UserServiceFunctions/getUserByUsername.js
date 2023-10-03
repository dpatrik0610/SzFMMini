const { UserRepository } = require('../../models/UserRepository');
const userRepository = new UserRepository();

async function getUserByUsername(req, res) {
  const { username } = req.params;

  try {
    const user = await userRepository.getUserByUsername(username);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching user by username:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = getUserByUsername;
