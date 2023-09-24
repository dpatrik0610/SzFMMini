require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const database = require('./models/db');
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Configure CORS for regular HTTP requests
app.use(cors());

// Database connection setup
(async () => {
  try {
    await database.connect();
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
})();

// Routes
const routes = require('./routes/apiRoutes');
app.use('/', routes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});