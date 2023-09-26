const { ObjectId } = require('mongodb');

async function promoteTreeState(userRepository, userId, treeId, new_state) {
  const result = await userRepository.collection.findOneAndUpdate(
    { _id: new ObjectId(userId), 'planted_trees.treeId': new ObjectId(treeId) },
    { $set: { 'planted_trees.$.tree_state': new_state } },
    { returnOriginal: false }
  );

  return result.value !== null;
}

module.exports = promoteTreeState;
