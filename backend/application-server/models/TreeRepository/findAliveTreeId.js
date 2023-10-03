async function getAliveTreeId(userRepository, userId) {
  try {
    const user = await userRepository.getUserById(userId);
    if (user) {
      const aliveTree = user.planted_trees.find((tree) => tree.tree_state !== 0);
      if (aliveTree) {
        return aliveTree.treeId.toString();
      }
    }

    return null;
  } catch (error) {
    throw error;
  }
}

module.exports = getAliveTreeId;
