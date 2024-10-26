const mongoose = require('mongoose');

const OrderItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  status: { type: String, default: 'Pending' },
});

const OrderSchema = new mongoose.Schema({
  orderNumber: { type: Number, required: true },
  items: [OrderItemSchema],
  status: { type: String, default: 'Pending' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', OrderSchema);
