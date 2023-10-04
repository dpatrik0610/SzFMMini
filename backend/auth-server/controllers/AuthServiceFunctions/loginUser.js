const { AuthRepository } = require('../../models/AuthRepository');
const authRepository = new AuthRepository();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Joi = require('joi');

// Joi schema for request validation
const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

async function loginUser(req, res) {
  try {
    const { error } = loginSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const { username, password } = req.body;

    const alreadyLoggedIn = req.cookies.token;
    if (alreadyLoggedIn) {
      return res.status(400).json({ message: 'User is already logged in.' });
    }

    // Check if the user with the provided username exists
    const user = await authRepository.getUserByUsername(username);
    if (!user) {
      return res.status(401).json({ message: 'User does not exist.' });
    }

    // Verify the user's password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Generate a JWT token for the authenticated user
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRATION || '10m',
    });

    // Set the token as a secure HttpOnly cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
    });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = loginUser