const express = require('express');
const router = express.Router();
const UserController = require('./userController');
const userController = new UserController();

router.get('/', (req,res) =>{
    res.status(200);
});
router.post('/register', userController.createUser);

module.exports = router;