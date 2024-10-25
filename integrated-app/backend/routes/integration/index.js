const express = require('express');
const { sendToExternalSystem } = require('../../controllers/integrationController');
const router = express.Router();

// POST endpoint for sending data to external systems
router.post('/send', sendToExternalSystem);

module.exports = router;
