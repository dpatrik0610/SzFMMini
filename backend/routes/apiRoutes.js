const express = require('express');
const router = express.Router();
const { createUser, getUserByUsername, getUserById , getUserList} = require('../controllers/UserController');
// const TreeController() = require('../controllers/TreeController');

// const treeController = new TreeController();
router.get('/users', getUserList);
router.get('/user/:username', getUserByUsername);
router.get('/user/:userId', getUserById);
router.post('/user/register', createUser);

router.get('/', (req,res) =>{
    res.status(200);
});

module.exports = router;