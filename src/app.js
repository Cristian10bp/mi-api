const express = require('express');
const itemsRouter = require('./routes/itemsRoutes');

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/items', itemsRouter);

// Error handling middleware
app.use(errorHandler);

module.exports = app;