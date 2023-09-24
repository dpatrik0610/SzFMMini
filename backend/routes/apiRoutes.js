const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logoutUser, getUserByUsername, getUserById , getUserList} = require('../controllers/UserController');
// const TreeController() = require('../controllers/TreeController');
const verifyToken = require('../middleware/verifyToken');

// const treeController = new TreeController();
router.get('/users', verifyToken, getUserList);
router.get('/user/:username', verifyToken, getUserByUsername);
router.get('/user/id/:userId', verifyToken, getUserById);

router.post('/login', loginUser);
router.post('/logout', verifyToken, logoutUser);
router.post('/user/register', registerUser);

router.get('/', (req,res) =>{
    res.status(200);
});


// Protected routes
router.get('/protected', verifyToken, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});

module.exports = router;