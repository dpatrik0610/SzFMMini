const { ObjectId } = require('mongodb');

async function getTreeState(userRepository, userId, treeId) {
  try {
    const user = await userRepository.getUserById(userId);

    if (user) {
      // Find the tree in the planted_trees array by its ID
      const tree = user.planted_trees.find((t) => t.treeId.equals(new ObjectId(treeId)));

      if (tree) {
        return tree.tree_state;
      }
    }

    return null;
  } catch (error) {
    throw error;
  }
}

module.exports = getTreeState;
