const { ObjectId } = require('mongodb');

async function chopTree(userRepository, userId, treeId) {
  try {
    const user = await userRepository.getUserById(userId);

    if (user) {
      const treeToUpdate = user.planted_trees.find((tree) => tree.treeId.equals(new ObjectId(treeId)));

      if (treeToUpdate) {
        // Update the tree's state to 0
        treeToUpdate.tree_state = 0;
        // Save the updated user object
        await userRepository.collection.updateOne(
          { _id: new ObjectId(userId), 'planted_trees.treeId': new ObjectId(treeId) },
          { $set: { 'planted_trees.$.tree_state': 0 } }
        );
        return true;
      }
    }

    return false;
  } catch (error) {
    throw error;
  }
}

module.exports = chopTree;
