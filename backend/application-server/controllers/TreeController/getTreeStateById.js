const { TreeRepository } = require('../../models/TreeRepository');
const treeRepository = new TreeRepository();

async function getTreeState(req, res) {
  try {
    const userId = req.user.userId;
    const treeId = await treeRepository.findAliveTreeId(userId);

    // Use the TreeRepository to get the tree's state
    const treeState = await treeRepository.getTreeState(userId, treeId);

    if (treeState !== null) {
      res.status(200).json({ treeState });
    } else {
      res.status(404).json({ message: 'Tree not found' });
    }
  } catch (error) {
    console.error('Error getting tree state:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = getTreeState;
