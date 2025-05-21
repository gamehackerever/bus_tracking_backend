require('dotenv').config();
const express = require('express');
const cors = require('cors');
const busRoutes = require('./routes/busRoutes');
const sequelize = require('./config/database');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', busRoutes);

sequelize.sync().then(() => {
  console.log('Database synced');
}).catch(err => {
  console.error('Failed to sync database:', err);
});

module.exports = app;
