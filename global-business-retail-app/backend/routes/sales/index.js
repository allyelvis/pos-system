const express = require('express');
const Sale = require('../../models/Sale');
const router = express.Router();

// Complete a sale
router.post('/', async (req, res) => {
  const sale = new Sale(req.body);
  await sale.save();
  res.json(sale);
});

module.exports = router;
