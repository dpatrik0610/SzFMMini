const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logoutUser } = require('../controllers/AuthService');
const verifyToken = require('../../application-server/middlewares/verifyToken');

// User registration
router.post('/register', registerUser);

// User login
router.post('/login', loginUser);

// User logout
router.post('/logout', verifyToken, logoutUser)
module.exports = router;
