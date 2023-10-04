const { TreeRepository } = require('../../models/TreeRepository');
const treeRepository = new TreeRepository();

async function getTree(req, res) {
  const userId = req.user.userId;
  const { treeId } = req.params;
  try {
    const tree = await treeRepository.getTreeData(userId, treeId);
    if (!tree) return res.status(404).json({ message: 'Tree not found' });
    res.status(200).json(tree);
  } catch (error) {
    res.status(500).json({ message: `Error fetching tree: ${error}` });
  }
}

module.exports = getTree;
