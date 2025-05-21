const Bus = require('../models/Bus');

exports.updateBusLocation = async (req, res) => {
  const { busId } = req.params;
  const { latitude, longitude } = req.body;

  try {
    // Upsert: Create new or update existing bus location
    const [bus, created] = await Bus.upsert({
      busId,
      latitude,
      longitude,
      lastUpdated: new Date()
    });
    res.json({ message: created ? 'Created' : 'Updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllBuses = async (req, res) => {
  try {
    const buses = await Bus.findAll();
    res.json(buses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
