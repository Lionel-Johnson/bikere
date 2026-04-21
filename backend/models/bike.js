const mongoose = require('mongoose');

const bikeSchema = new mongoose.Schema({
    model: String,
    brand: String,
    color: String,
    features: [String],
});

module.exports = mongoose.model('Bike', bikeSchema);
