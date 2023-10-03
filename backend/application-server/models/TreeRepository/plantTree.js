const { ObjectId } = require('mongodb');

async function plantTree(userRepository, userId, treeType) {
  const newTree = {
    treeId: new ObjectId(),
    plant_date: new Date(),
    tree_type: treeType,
    tree_state: 1,
    last_sprinkled: new Date(),
  };

  const result =  await userRepository.collection.findOneAndUpdate(
    { _id: new ObjectId(userId) },
    { $push: { planted_trees: newTree } },
    { new: true }
  );

  return result.value !== null;
  
}

module.exports = plantTree;
