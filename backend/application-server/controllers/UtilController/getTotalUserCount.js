const { UserRepository } = require('../../models/UserRepository');
const userRepository = new UserRepository();

async function getTotalUserCount(req, res) {
  try {
    const totalUsers = await userRepository.getTotalUserCount();

    res.status(200).json({ totalUsers });
  } catch (error) {
    console.error('Error getting total user count:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = getTotalUserCount;