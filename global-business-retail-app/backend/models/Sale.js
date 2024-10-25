const mongoose = require('mongoose');

const SaleSchema = new mongoose.Schema({
  items: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: Number
  }],
  total: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Sale', SaleSchema);
