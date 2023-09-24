const express = require('express');
const router = express.Router();
const { createUser, getUserByUsername, getUserById , getUserList, loginUser } = require('../controllers/UserController');
// const TreeController() = require('../controllers/TreeController');
const verifyToken = require('../middleware/verifyToken');

// const treeController = new TreeController();
router.get('/users', getUserList);
router.get('/user/:username', getUserByUsername);
router.get('/user/:userId', getUserById);

router.post('/login', loginUser);
router.post('/user/register', createUser);

router.get('/', (req,res) =>{
    res.status(200);
});


// Protected routes
router.get('/protected', verifyToken, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
  });
  
module.exports = router;