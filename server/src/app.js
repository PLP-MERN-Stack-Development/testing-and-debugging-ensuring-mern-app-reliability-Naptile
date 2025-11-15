const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Import routes
const postRoutes = require('./routes/postRoutes');
app.use('/api/posts', postRoutes);

module.exports = app;
