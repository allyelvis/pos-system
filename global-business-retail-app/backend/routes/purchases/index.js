const express = require('express');
const Purchase = require('../../models/Purchase');
const router = express.Router();

// Get all purchases
router.get('/', async (req, res) => {
  const purchases = await Purchase.find();
  res.json(purchases);
});

// Add new purchase
router.post('/', async (req, res) => {
  const purchase = new Purchase(req.body);
  await purchase.save();
  res.json(purchase);
});

module.exports = router;
