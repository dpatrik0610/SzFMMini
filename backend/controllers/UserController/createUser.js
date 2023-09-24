const { UserRepository } = require('../../models/UserRepository');
const userRepository = new UserRepository();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

async function createUser(req, res) {
  try {
    const { username, password } = req.body;

    // Check if the username already exists
    const existingUser = await userRepository.getUserByUsername(username);

    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user document
    const newUser = {
      username,
      password: hashedPassword,
    };

    const result = await userRepository.createUser(newUser);

    // Generate a JWT token for the newly created user
    const token = jwt.sign({ userId: result.insertedId }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(201).json({ message: 'User created', token });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = createUser;
