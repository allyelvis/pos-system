const express = require('express');
const Car = require('../../models/CarDealer/Car');
const router = express.Router();

// Get all cars
router.get('/', async (req, res) => {
  const cars = await Car.find();
  res.json(cars);
});

// Get a single car by ID
router.get('/:id', async (req, res) => {
  const car = await Car.findById(req.params.id);
  res.json(car);
});

// Create a new car
router.post('/', async (req, res) => {
  const newCar = new Car(req.body);
  await newCar.save();
  res.status(201).json(newCar);
});

// Update a car
router.put('/:id', async (req, res) => {
  const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedCar);
});

// Delete a car
router.delete('/:id', async (req, res) => {
  await Car.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;