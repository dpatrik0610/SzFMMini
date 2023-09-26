const { TreeRepository } = require('../../models/TreeRepository');
const treeRepository = new TreeRepository();

async function plantTree(req, res) {
  const userId = req.user.userId;
  const { treeType } = req.body;

  try {
    // Check if the user has any alive trees
    const aliveTreeId = await treeRepository.findAliveTreeId(userId); // Use findAliveTreeId, not getAliveTreeId

    if (aliveTreeId === null) {
      // If no alive trees, then allow planting a new tree
      const success = await treeRepository.plantTree(userId, treeType);
      if(success) res.status(201).json({message: "Tree successfully planted!"});
    } else {
      // If there's an alive tree, prevent planting a new one
      res.status(400).json({ message: 'You already have an alive tree' });
    }
  } catch (error) {
    res.status(500).json({ message: `Error planting tree: ${error}` });
  }
}

module.exports = plantTree;
