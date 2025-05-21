const express = require('express');
const router = express.Router();
const Bus = require('../models/Bus');
const driverController = require('../controllers/driverController');

router.post('/buses', async (req, res) => {
  try {
    const { busId, latitude, longitude, lastUpdated } = req.body;
    const newBus = await Bus.create({
      busId,
      latitude,
      longitude,
      lastUpdated: lastUpdated || new Date()
    });
    res.status(201).json(newBus);
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      console.error('Validation errors:', error.errors.map(e => e.message));
      return res.status(400).json({
        error: 'Validation error',
        details: error.errors.map(e => e.message)
      });
    }
    console.error('Other error:', error);
    res.status(500).json({ error: error.message });
  }
});

router.post('/login', driverController.login);

router.get('/', (req, res) => {
  res.send('Welcome to Bus Tracking API');
});

router.get('/buses', async (req, res) => {
  try {
    const buses = await Bus.findAll();
    res.json(buses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
