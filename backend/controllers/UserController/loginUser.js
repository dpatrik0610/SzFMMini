const { UserRepository } = require('../../models/UserRepository');
const userRepository = new UserRepository();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

async function loginUser(req, res) {
  try {
    const { username, password } = req.body;

    // Check if the user with the provided username exists
    const user = await userRepository.getUserByUsername(username);

    if (!user) {
      return res.status(401).json({ message: 'User does not exist.' });
    }

    // Verify the user's password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token for the authenticated user
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = loginUser
