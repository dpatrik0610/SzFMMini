const { ObjectID } = require('mongodb');
const database = require('./db');

class UserRepository {
  constructor() {
    this.collection = database.getDb().collection('users');
  }

  async createUser(user) {
    return await this.collection.insertOne(user);
  }

  async getUserByUsername(username) {
    return await this.collection.findOne({ username });
  }

  async getUserById(userId) {
    return await this.collection.findOne({ _id: new ObjectID(userId) });
  }

  async getUserList() {
    return await this.collection.find().toArray();
  }

}

module.exports = { UserRepository };
