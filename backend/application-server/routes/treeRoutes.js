const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const { getTree, getActiveTree, getTreeAge, getTreeState, plantTree, promoteTreeState, chopTree, sprinkleActiveTree, treeCondition} = require('../controllers/TreeService');

// Protect all routes in this file with the token
router.use(verifyToken);

// Routes for TreeController functions
router.get('/', getActiveTree);
router.get('/getTree/:treeId', getTree);

router.post('/plant', plantTree);
router.put('/promote', promoteTreeState);
router.put('/sprinkle', sprinkleActiveTree);
router.delete('/chop', chopTree);

module.exports = router;
