const { ObjectID } = require('mongodb');
const database = require('./db');

class UsersRepository {
  constructor() {
    this.collection = database.getDb().collection('users');
  }

  async createUser(user) {
    return await this.collection.insertOne(user);
  }

  async getUserById(userId) {
    return await this.collection.findOne({ _id: new ObjectID(userId) });
  }

}

module.exports = { UsersRepository };
