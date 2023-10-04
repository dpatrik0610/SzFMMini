const express = require('express');
const router = express.Router();
const axios = require('axios');
const authServerUrl = process.env.AuthServerURL;

// User registration
router.post('/register', async (req, res) => {
  try {
    const response = await axios.post(`${authServerUrl}/register`, req.body);
    res.status(response.status).json(response.data);
  } catch (error) {
    if(error.response){
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error('Error registering user:', error.message);
      res.status(500).json({ message: 'Internal server error' });  
    }
  }
});

// User login
router.post('/login', async (req, res) => {
  try {
    const response = await axios.post(`${authServerUrl}/login`, req.body);
    res.status(response.status).json(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error('Axios error during login:', error.message);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
});

// User logout
router.post('/logout', async (req, res) => {
  try {
    res.clearCookie('token');
    res.status(200).json({message: "Logout Successful."});
  } catch (error) {
      console.error('Error logging out:', error.message);
      res.status(500).json({ message: 'Internal server error' });  
  }
});

module.exports = router;
