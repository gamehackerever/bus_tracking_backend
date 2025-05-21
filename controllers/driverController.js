const Driver = require('../models/driverModel');

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const driver = await Driver.findOne({
      where: { username, password }
    });

    if (!driver) {
      return res.status(401).json({ 
        success: false,  // Add this
        message: 'Invalid credentials' 
      });
    }

    // Successful login
    res.json({ 
      success: true,  // Add this
      message: 'Login successful',
      busId: driver.busId  // Ensure this field exists in your Driver model
    });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false,  // Add this
      message: 'Server error' 
    });
  }
};
