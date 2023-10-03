require('dotenv').config();
const express = require('express');
const app = express();
const cors = require("cors");
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const database = require('./models/db');
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(cors({
  origin: '*',
  methods: "GET,POST",
  optionsSuccessStatus: 200
}));
app.use(cookieParser());
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
const routes = require('./routes/apiRoutes');
const auth = require('./routes/auth');
app.use('/api', routes);
app.use('/auth', auth);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});