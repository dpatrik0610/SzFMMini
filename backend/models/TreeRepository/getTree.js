const { ObjectId } = require('mongodb');

async function getTree(userRepository, userId, treeId) {
  const userData = await userRepository.getUserById(userId);

  if (userData) {
    const tree = userData.planted_trees.find((tree) => tree.treeId.equals(new ObjectId(treeId)));

    if (tree) return tree;
  }
  return null;
}

module.exports = getTree;
