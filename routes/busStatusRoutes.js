const express = require('express');
const router = express.Router();
const busStatusController = require('../controllers/busStatusController');

router.get('/', busStatusController.getBusStatuses);

module.exports = router;
