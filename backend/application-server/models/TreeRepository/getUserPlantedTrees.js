async function getUserPlantedTrees(userRepository, userId) {
    try {
      const user = await userRepository.getUserById(userId);
  
      if (user) {
        return user.planted_trees;
      }
  
      return null;
    } catch (error) {
      throw error;
    }
  }
  
  module.exports = getUserPlantedTrees;
  