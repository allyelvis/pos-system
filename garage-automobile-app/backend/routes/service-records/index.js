const express = require('express');
const ServiceRecord = require('../../models/Garage/ServiceRecord');
const router = express.Router();

// Get all active service records
router.get('/', async (req, res) => {
  const records = await ServiceRecord.find({ status: { $ne: 'Completed' } });
  res.json(records);
});

// Update service record status
router.put('/:id', async (req, res) => {
  const record = await ServiceRecord.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
  res.json(record);
});

module.exports = router;
