const { TreeRepository } = require('../../models/TreeRepository');
const treeRepository = new TreeRepository();

async function promoteTreeState(req, res) {
  try {
    const userId = req.user.userId;
    
    const aliveTreeId = await treeRepository.findAliveTreeId(userId);
    if (!aliveTreeId) {
      return res.status(400).json({ message: 'No alive tree found for the user' });
    }

    const currentTreeState = await treeRepository.getTreeState(userId, aliveTreeId);

    if (currentTreeState === 7) {
      return res.status(400).json({ message: 'Tree is already fully grown' });
    } else if (currentTreeState === 0) {
      return res.status(400).json({ message: 'Tree is DEAD' });
    }

    const newTreeState = currentTreeState + 1;

    const result = await treeRepository.promoteTreeState(userId, aliveTreeId, newTreeState);
    if (!result) {
      return res.status(404).json({ message: 'Tree not found' });
    }

    res.status(200).json({ message: 'Tree state promoted successfully' });
  } catch (error) {
    res.status(500).json({ message: `Error promoting tree state: ${error}` });
  }
}

module.exports = promoteTreeState;
