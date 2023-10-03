const { TreeRepository } = require('../../models/TreeRepository');
const treeRepository = new TreeRepository();

async function getTreeAge(req, res) {
  try {
    const userId = req.user.userId;
    const treeId = await treeRepository.findAliveTreeId(userId);

    // Use the TreeRepository to get the tree's age
    const treeAge = await treeRepository.getTreeAge(userId, treeId);

    if (treeAge !== null) {
      res.status(200).json({ treeAge });
    } else {
      res.status(404).json({ message: 'Tree not found' });
    }
  } catch (error) {
    console.error('Error getting tree age:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = getTreeAge;
