require('dotenv').config();
const express = require('express');
const app = express();
const cors = require("cors");
const customLogger = require('../application-server/middlewares/morgan');
const cookieParser = require('cookie-parser');

const database = require('./database/db');
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(cors({
  origin: '*',
  methods: "GET,POST",
  optionsSuccessStatus: 200
}));

app.use(customLogger);
app.use(cookieParser());

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