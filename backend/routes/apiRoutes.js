const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logoutUser, getUserByUsername, getUserById , getUserList} = require('../controllers/UserController');
const { getTotalUserCount } = require('../controllers/utilController');
const verifyToken = require('../middleware/verifyToken');
const treeRoutes = require('./treeRoutes');


router.use('/tree', treeRoutes);
router.get('/users', verifyToken, getUserList);
router.get('/user/:username', verifyToken, getUserByUsername);
router.get('/user/id/:userId', verifyToken, getUserById);
router.get('/users/count', getTotalUserCount);

router.post('/login', loginUser);
router.post('/logout', verifyToken, logoutUser);
router.post('/register', registerUser);

router.get('/', (req,res) =>{
    res.status(200);
});


// Protected routes
router.get('/protected', verifyToken, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});

module.exports = router;