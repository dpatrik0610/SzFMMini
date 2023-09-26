const { UserRepository } = require('./UserRepository');
const getTree = require('./TreeRepository/getTree');
const findAliveTreeId = require('./TreeRepository/findAliveTreeId');
const getUserPlantedTrees = require('./TreeRepository/getUserPlantedTrees');
const chopTree = require('./TreeRepository/chopTree');
const getTreeAge = require('./TreeRepository/getTreeAge');
const getTreeState = require('./TreeRepository/getTreeState');
const getSprinkleDate = require('./TreeRepository/getSprinkleDate');
const plantTree = require('./TreeRepository/plantTree');
const promoteTreeState = require('./TreeRepository/promoteTreeState');
const updateTree = require('./TreeRepository/updateTree');
const sprinkleTree = require('./TreeRepository/sprinkleTree');

class TreeRepository {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async getTree(userId, treeId) {
    return await getTree(this.userRepository, userId, treeId);
  }

  async findAliveTreeId(userId) {
    return await findAliveTreeId(this.userRepository, userId);
  }

  async getUserPlantedTrees(userId) {
    return await getUserPlantedTrees(this.userRepository, userId);
  }

  async chopTree(userId, treeId) {
    return await chopTree(this.userRepository, userId, treeId);
  }

  async getTreeAge(userId, treeId) {
    return await getTreeAge(this.userRepository, userId, treeId);
  }

  async getTreeState(userId, treeId) {
    return await getTreeState(this.userRepository, userId, treeId);
  }

  async getSprinkleDate(userId, treeId) {
    return await getSprinkleDate(this.userRepository, userId, treeId);
  }

  async plantTree(userId, treeType) {
    return await plantTree(this.userRepository, userId, treeType);
  }

  async promoteTreeState(userId, treeId, new_state) {
    return await promoteTreeState(this.userRepository, userId, treeId, new_state);
  }

  async updateTree(userId, treeId, newTreeData){
    return await updateTree(this.userRepository, userId, treeId, newTreeData);
  }
  async sprinkleTree(userId, treeId){
    return await sprinkleTree(this.userRepository, userId, treeId);
  }
}

module.exports = { TreeRepository };
