const mongoose = require('mongoose');

const BillSchema = new mongoose.Schema({
  billNumber: { type: String, required: true, unique: true },
  supplierName: { type: String, required: true },
  items: [
    {
      description: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
      total: { type: Number, required: true }
    }
  ],
  totalAmount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  status: { type: String, enum: ['Paid', 'Unpaid'], default: 'Unpaid' }
});

module.exports = mongoose.model('Bill', BillSchema);
