const { ObjectId } = require('mongodb');

async function updateTree(userRepository, userId, treeId, newTreeData) {
  try {
    const filter = {
      _id: new ObjectId(userId),
      'planted_trees.treeId': new ObjectId(treeId),
    };

    const update = {
      $set: {
        'planted_trees.$.tree_type': newTreeData.tree_type,
        'planted_trees.$.tree_state': newTreeData.tree_state,
        'planted_trees.$.last_sprinkled': newTreeData.last_sprinkled,
      },
    };

    const result = await userRepository.collection.findOneAndUpdate(filter, update, {
      returnOriginal: false,
    });

    return result.value !== null;
  } catch (error) {
    throw error;
  }
}

module.exports = updateTree;
