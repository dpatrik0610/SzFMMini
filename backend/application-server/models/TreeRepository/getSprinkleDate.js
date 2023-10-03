const { ObjectId } = require('mongodb');

async function getSprinkleDate(userRepository, userId, treeId) {
  try {
    const user = await userRepository.collection.findOne({ _id: new ObjectId(userId) });
    const tree = user.planted_trees.find(tree => tree.treeId == treeId);
    if (tree) {
      return tree.last_sprinkled;
    }

    return null;
  } catch (error) {
    throw error;
  }
}

module.exports = getSprinkleDate;
