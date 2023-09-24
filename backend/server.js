require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

//const database = require('./backend/models/db');
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Configure CORS for regular HTTP requests
app.use(cors());

// Routes
const routes = require('./routes/apiRoutes');
app.use('/', routes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});