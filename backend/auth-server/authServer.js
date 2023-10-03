require('dotenv').config();
const express = require('express');
const app = express();
const cors = require("cors");
const morgan = require('morgan');

const database = require('./database/db');
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(cors({
  origin: '*',
  methods: "GET,POST",
  optionsSuccessStatus: 200
}));

app.use(morgan('combined'));

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
const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes)

app.listen(PORT, () => {
  console.log(`Authentication server is running on port ${PORT}`);
});