const { ObjectId } = require('mongodb');
const database = require('../database/db');

class AuthRepository {
  constructor() {
    this.collection = database.getDb().collection('users');
  }

  async registerUser(user) {
    return await this.collection.insertOne(user);
  }

  async getUserByUsername(username) {
    return await this.collection.findOne({ username });
  }

  async doesUsernameExist(username) {
    const user = await this.collection.findOne({ username });
    return !!user;
  }
}

module.exports = { AuthRepository };
