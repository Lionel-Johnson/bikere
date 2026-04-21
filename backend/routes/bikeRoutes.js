const express = require('express');
const router = express.Router();
const Bike = require('../models/bike');

// Get all bikes
router.get('/', async (req, res) => {
    const bikes = await Bike.find();
    res.json(bikes);
});

// Create a bike
router.post('/', async (req, res) => {
    const bike = new Bike(req.body);
    await bike.save();
    res.status(201).json(bike);
});

module.exports = router;
