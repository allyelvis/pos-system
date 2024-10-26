const mongoose = require('mongoose');

const IntegrationLogSchema = new mongoose.Schema({
  system: { type: String, required: true },
  endpoint: { type: String, required: true },
  requestData: { type: Object, required: true },
  responseData: { type: Object },
  status: { type: String, default: 'pending' },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('IntegrationLog', IntegrationLogSchema);
