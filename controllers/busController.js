const Bus = require('../models/Bus');

// Get all buses
exports.getBuses = async (req, res) => {
  try {
    const buses = await Bus.findAll();
    res.json(buses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
