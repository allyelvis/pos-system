const express = require('express');
const Order = require('../../models/Restaurant/Order');
const router = express.Router();

// Get all active orders
router.get('/', async (req, res) => {
  const orders = await Order.find({ status: { $ne: 'Completed' } });
  res.json(orders);
});

// Update order status
router.put('/:id', async (req, res) => {
  const order = await Order.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
  res.json(order);
});

module.exports = router;
