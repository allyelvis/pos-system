const express = require('express');
const { createBill, customizeBillForm, getBills } = require('../controllers/billController');
const router = express.Router();

// POST route for creating a new bill
router.post('/create', createBill);

// POST route for customizing bill form
router.post('/customize', customizeBillForm);

// GET route for retrieving all bills
router.get('/', getBills);

module.exports = router;
