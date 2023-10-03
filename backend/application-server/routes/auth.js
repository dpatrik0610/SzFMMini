const express = require('express');
const router = express.Router();

//router.post('/login', loginUser);
//router.post('/logout', verifyToken, logoutUser);
//router.post('/register', registerUser);

router.get('/', (req,res) =>{
    res.status(200);
});

module.exports = router;