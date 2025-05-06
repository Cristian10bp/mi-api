const express = require('express');
const itemsRouter = require('./routes/itemsRoutes');

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/items', itemsRouter);



module.exports = app;