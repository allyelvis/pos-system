const Bill = require('../models/Bill');

// Function to create a new bill
exports.createBill = async (req, res) => {
  try {
    const bill = new Bill(req.body);
    await bill.save();
    res.status(201).json({ message: 'Bill created successfully', bill });
  } catch (error) {
    res.status(500).json({ message: 'Error creating bill', error });
  }
};

// Function to customize bill form data
exports.customizeBillForm = (req, res) => {
  const customForm = {
    header: 'Custom Header for Bill',
    footer: 'Custom Footer for Bill',
    additionalFields: req.body.additionalFields || []
  };
  res.json({ message: 'Bill form customized successfully', customForm });
};

// Function to retrieve all bills
exports.getBills = async (req, res) => {
  try {
    const bills = await Bill.find();
    res.json(bills);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving bills', error });
  }
};
