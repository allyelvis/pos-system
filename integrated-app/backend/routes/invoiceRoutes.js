const express = require('express');
const { createInvoice, customizeInvoiceForm, getInvoices } = require('../controllers/invoiceController');
const router = express.Router();

// POST route for creating a new invoice
router.post('/create', createInvoice);

// POST route for customizing invoice form
router.post('/customize', customizeInvoiceForm);

// GET route for retrieving all invoices
router.get('/', getInvoices);

module.exports = router;
