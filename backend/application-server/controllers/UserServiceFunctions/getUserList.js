const { UserRepository } = require('../../models/UserRepository');
const userRepository = new UserRepository();

async function getUserList(req, res) {
  try {
    const userList = await userRepository.getUserList();
    res.status(200).json(userList);
  } catch (error) {
    console.error('Error fetching user list:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = getUserList;
