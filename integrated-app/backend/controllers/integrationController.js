const axios = require('axios');
const IntegrationLog = require('../models/IntegrationLog');

// Function to handle API requests to external systems
async function sendToExternalSystem(req, res) {
  const { system, endpoint, data } = req.body;
  const externalUrl = getExternalSystemUrl(system) + endpoint;

  try {
    const response = await axios.post(externalUrl, data);
    const log = new IntegrationLog({
      system,
      endpoint,
      requestData: data,
      responseData: response.data,
      status: 'success'
    });
    await log.save();
    res.json({ message: 'Data sent successfully', response: response.data });
  } catch (error) {
    const log = new IntegrationLog({
      system,
      endpoint,
      requestData: data,
      responseData: error.response ? error.response.data : error.message,
      status: 'failed'
    });
    await log.save();
    res.status(500).json({ message: 'Failed to send data', error: error.message });
  }
}

// Function to define system base URLs
function getExternalSystemUrl(system) {
  const systemUrls = {
    CRM: 'https://crm.example.com/api',
    ERP: 'https://erp.example.com/api',
    CMS: 'https://cms.example.com/api',
    PMS: 'https://pms.example.com/api',
    POS: 'https://pos.example.com/api'
  };
  return systemUrls[system] || '';
}

module.exports = { sendToExternalSystem };
