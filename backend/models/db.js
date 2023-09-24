const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const uri = process.env.CONNECTION_STRING;

class Database {
  constructor() {
    this.client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });
  }

  async connect() {
    try {
      await this.client.connect();
      await this.client.db("TreeSimulator").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw error;
    }
  }

  getDb() {
    return this.client.db();
  }
}

const database = new Database();

module.exports = database;
