const BusStatus = require('../models/BusStatus');

// GET /api/bus-status
exports.getBusStatuses = async (req, res) => {
  try {
    const busStatuses = await BusStatus.findAll();
    res.json(busStatuses);
  } catch (err) {
    console.error('Error fetching bus status summary:', err);
    res.status(500).json({ error: 'Failed to fetch bus status' });
  }
};
