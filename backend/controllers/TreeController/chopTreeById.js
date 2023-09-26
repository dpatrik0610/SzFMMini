const { TreeRepository } = require('../../models/TreeRepository');
const treeRepository = new TreeRepository();

async function chopTree(req, res) {
  try {
    const userId = req.user.userId;

    // Use the Tree Repository function to find the alive tree for the user
    const treeId = await treeRepository.findAliveTreeId(userId);

    if (treeId) {
      // Update the tree's state to 0
      const success = await treeRepository.chopTree(userId, treeId);

      if (success) {
        return res.status(200).json({ message: 'Tree chopped successfully' });
      }
    }

    return res.status(404).json({ message: 'Tree not found or user not found' });
  } catch (error) {
    console.error('Error chopping tree:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = chopTree;
