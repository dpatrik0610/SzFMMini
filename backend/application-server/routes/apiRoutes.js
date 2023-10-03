const express = require('express');
const router = express.Router();
const { getUserByUsername, getUserById , getUserList} = require('../controllers/UserController');
const { getTotalUserCount } = require('../controllers/utilController');
const treeRoutes = require('./treeRoutes');
const verifyToken = require('../middlewares/verifyToken');

router.use('/tree', verifyToken, treeRoutes);
router.get('/user/:username', verifyToken, getUserByUsername);
router.get('/user/id/:userId', verifyToken, getUserById);

router.get('/users', verifyToken, getUserList);
router.get('/users/count', getTotalUserCount);

router.get('/', (req,res) =>{
    res.status(200);
});

module.exports = router;