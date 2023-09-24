const { ObjectId } = require('mongodb');
const database = require('./db');

class UserRepository {
  constructor() {
    this.collection = database.getDb().collection('users');
  }

  async registerUser(user) {
    return await this.collection.insertOne(user);
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

  async doesUsernameExist(username) {
    const user = await this.collection.findOne({ username });
    return !!user;
  }
}

module.exports = { UserRepository };
