const { AuthRepository } = require('../../models/AuthRepository');
const authRepository = new AuthRepository();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Joi = require('joi'); // Import Joi for validation

// Define a Joi schema for request validation
const registrationSchema = Joi.object({
  username: Joi.string().min(5).max(30).required(),
  password: Joi.string().min(8).required(),
});

async function registerUser(req, res) {
  try {
    const { error } = registrationSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const { username, password } = req.body;

    // Check if the username already exists
    const existingUser = await authRepository.doesUsernameExist(username);

    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user document
    const newUser = {
      username,
      password: hashedPassword,
      registration_date: new Date(),
      last_login_date: new Date(),
    };

    const result = await authRepository.registerUser(newUser);

    // Generate a JWT token for the newly created user
    const token = jwt.sign({ userId: result.insertedId }, process.env.JWT_SECRET, {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRATION || '10m',
    });

    // Set the token as a secure HttpOnly cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 3600000,
    });

    res.status(201).json({ message: 'User created', token });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = registerUser;
