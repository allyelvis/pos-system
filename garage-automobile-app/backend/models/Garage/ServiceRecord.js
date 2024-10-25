const mongoose = require('mongoose');

const ServiceRecordSchema = new mongoose.Schema({
  vehicleModel: { type: String, required: true },
  ownerName: { type: String, required: true },
  diagnosis: { type: String },
  status: { type: String, default: 'Pending' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ServiceRecord', ServiceRecordSchema);
