const { UserRepository } = require('../../models/UserRepository');
const userRepository = new UserRepository();

async function checkUsernameExists(req, res) {
  try {
    const { username } = req.body;

    // Check if the username already exists
    const usernameExists = await userRepository.doesUsernameExist(username);

    res.status(200).json({ exists: usernameExists });
  } catch (error) {
    console.error('Error checking username existence:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = checkUsernameExists;