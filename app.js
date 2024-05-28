const express = require('express');
const noteRoutes = require('./routes/noteRoute');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the uploads directory
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/notes', noteRoutes);

module.exports = app;
