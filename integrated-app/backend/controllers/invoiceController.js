const Invoice = require('../models/Invoice');

// Function to create a new invoice
exports.createInvoice = async (req, res) => {
  try {
    const invoice = new Invoice(req.body);
    await invoice.save();
    res.status(201).json({ message: 'Invoice created successfully', invoice });
  } catch (error) {
    res.status(500).json({ message: 'Error creating invoice', error });
  }
};

// Function to customize invoice form data
exports.customizeInvoiceForm = (req, res) => {
  const customForm = {
    header: 'Custom Header for Invoice',
    footer: 'Custom Footer for Invoice',
    additionalFields: req.body.additionalFields || []
  };
  res.json({ message: 'Invoice form customized successfully', customForm });
};

// Function to retrieve all invoices
exports.getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.json(invoices);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving invoices', error });
  }
};
