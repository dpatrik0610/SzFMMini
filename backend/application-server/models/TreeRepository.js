const { ObjectId } = require('mongodb');
const database = require('./db');

class TreeRepository {
  constructor() {
    this.treeCollection = database.getDb().collection('trees');
  }

  async getTreeData(userId, treeId) {
    // Find the tree data by user ID and tree ID
    const treeData = await this.treeCollection.findOne({
      _id: new ObjectId(treeId),
      userId: new ObjectId(userId),
    });
    return treeData;
  }

  async findAliveTreeId(userId) {
    // Find the alive tree's _id for the user
    const aliveTree = await this.treeCollection.findOne({
      userId: new ObjectId(userId),
      treeState: {$ne: 0}, // Check for treeState not equal to 0 (dead)
    });

    return aliveTree ? aliveTree._id : null;
  }

  async getUserPlantedTrees(userId) {
    // Find all trees planted by the user
    const userPlantedTrees = await this.treeCollection.find({
      userId: new ObjectId(userId),
    }).toArray();

    return userPlantedTrees;
  }

  async chopTree(userId, treeId) {
    // Chop the tree (update treeState to 0)
    const result = await this.treeCollection.updateOne(
      {
        _id: new ObjectId(treeId),
        userId: new ObjectId(userId),
      },
      {
        $set: {
          treeState: 0,
        },
      }
    );

    return result.modifiedCount === 1;
  }

  async plantTree(userId, treeType) {
    // Insert a new tree for the user
    const newTree = {
      _id: new ObjectId(),
      userId: new ObjectId(userId),
      plant_date: new Date(),
      tree_type: treeType,
      treeState: 1, // Newly planted tree has treeState 1
      last_sprinkled: new Date(),
    };
  
    const result = await this.treeCollection.insertOne(newTree);
  
    return result.value !== null;
  }
  
  async updateTreeById(treeId, updatedTreeData) {
    try {
      const result = await this.treeCollection.updateOne(
        { _id: new ObjectId(treeId) },
        { $set: updatedTreeData }
      );

      if (result.matchedCount === 1) {
        return true; // Tree updated successfully
      } else {
        return false; // Tree not found or not updated
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = { TreeRepository };
