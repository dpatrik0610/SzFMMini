const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logoutUser, getUserByUsername, getUserById , getUserList} = require('../controllers/UserController');
const { getTotalUserCount } = require('../controllers/utilController');
const treeRoutes = require('./treeRoutes');


router.use('/tree', treeRoutes);
router.get('/user/:username', getUserByUsername);
router.get('/user/id/:userId', getUserById);

router.get('/users', getUserList);
router.get('/users/count', getTotalUserCount);

//router.post('/login', loginUser);
//router.post('/logout', verifyToken, logoutUser);
//router.post('/register', registerUser);

router.get('/', (req,res) =>{
    res.status(200);
});

module.exports = router;