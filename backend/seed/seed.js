const Bike = require('../models/bike');

async function seedDB() {
    await Bike.deleteMany(); // Clear existing data
    const bikes = [
        { model: 'Mountain', brand: 'BrandA', color: 'Red', features: ['Durable', 'Lightweight'] },
        { model: 'Road', brand: 'BrandB', color: 'Blue', features: ['Fast', 'Aerodynamic'] },
    ];
    await Bike.insertMany(bikes); // Insert seed data
}

module.exports = seedDB;
