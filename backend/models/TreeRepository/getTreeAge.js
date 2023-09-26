const { ObjectId } = require('mongodb');

async function getTreeAge(userRepository, userId, treeId) {
  try {
    const user = await userRepository.getUserById(userId);

    if (user) {
      // Find the tree in the planted_trees array by its ID
      const tree = user.planted_trees.find((t) => t.treeId.equals(new ObjectId(treeId)));

      if (tree) {
        // Calculate the tree's age based on the difference between plant_date and now
        const currentDate = new Date();
        const treeAgeMilliseconds = currentDate - tree.plant_date;
        const treeAgeDays = Math.floor(treeAgeMilliseconds / (1000 * 60 * 60 * 24));

        return treeAgeDays; // Return tree age in days
      }
    }

    return null;
  } catch (error) {
    throw error;
  }
}

module.exports = getTreeAge;
