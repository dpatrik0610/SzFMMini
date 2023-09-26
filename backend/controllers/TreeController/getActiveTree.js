const { TreeRepository } = require('../../models/TreeRepository');
const treeRepository = new TreeRepository();

async function getTree(req, res) {
  const userId = req.user.userId;
  const treeId = await treeRepository.findAliveTreeId(userId);
  if(!treeId) return res.status(404).json({ message: 'No alive tree found.' });

  try {
    const tree = await treeRepository.getTree(userId, treeId);
    res.status(200).json(tree);
  } catch (error) {
    res.status(500).json({ message: `Error fetching tree: ${error}` });
  }
}

module.exports = getTree;
