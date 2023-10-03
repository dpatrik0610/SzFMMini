const { ObjectId } = require('mongodb');
const database = require('./db');

class UserRepository {
  constructor() {
    this.collection = database.getDb().collection('users');
  }


  async getUserByUsername(username) {
    return await this.collection.findOne({ username });
  }

  async getUserById(userId) {
    return await this.collection.findOne({ _id: new ObjectId(userId) });
  }

  async getUserList() {
    return await this.collection.find().toArray();
  }

  async getTotalUserCount() {
    const totalUsers = await this.collection.countDocuments();
    return totalUsers;
  }
}

module.exports = { UserRepository };
