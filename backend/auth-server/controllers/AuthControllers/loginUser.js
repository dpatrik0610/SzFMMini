const { AuthRepository } = require('../../models/AuthRepository');
const authRepository = new UserRepository();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

async function loginUser(req, res) {
  try {
    const { username, password } = req.body;
    if(username == "" || password == "") return res.status(400).json({message: "Bad Request."});
    
    const alreadyLoggedIn = req.cookies.token;
    if(alreadyLoggedIn) { return res.status(400).json({ message: 'User is already logged in.'});}
    // Check if the user with the provided username exists
    const user = await authRepository.getUserByUsername(username);

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

    // Set the token as a cookie
    res.cookie('token', token, {
      httpOnly: true, // Make the cookie HttpOnly to prevent client-side access
      secure: true, // Require HTTPS to send the cookie
      sameSite: 'lax'
    })

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = loginUser
