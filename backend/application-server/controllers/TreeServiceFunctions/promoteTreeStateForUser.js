const { TreeRepository } = require('../../models/TreeRepository');
const treeRepository = new TreeRepository();

async function findAliveTree(userId) {
  const aliveTreeId = await treeRepository.findAliveTreeId(userId);
  return aliveTreeId;
}

async function promoteTree(treeId, treeState) {
  const updatedTreeData = { treeState: treeState + 1 };
  const result = await treeRepository.updateTreeById(treeId, updatedTreeData);
  return result;
}

async function promoteTreeState(req, res) {
  try {
    const userId = req.user.userId;

    const aliveTreeId = await findAliveTree(userId);
    if (!aliveTreeId) res.status(404).json({message: 'No alive tree found for the user'});

    const treeData = await treeRepository.getTreeData(userId, aliveTreeId);
    const treeState = treeData.treeState;
    if (treeState >= 7) {
      return res.status(400).json({message: 'Tree is already fully grown'});
    } else if (treeState === 0) {
      return res.status(400).json({message: 'Tree is DEAD'});
    }
    const result = await promoteTree(aliveTreeId, treeState);

    if (!result) {
      return res.status(404).json({ message: 'Tree not found' });
    }

    res.status(200).json({ message: 'Tree state promoted successfully' });
  }
  catch (error) {
    res.status(500).json({ message: `Error promoting tree state: ${error.message}` });
  }
}

module.exports = promoteTreeState;
