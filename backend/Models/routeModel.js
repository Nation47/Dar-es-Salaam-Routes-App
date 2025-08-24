const mongoose = require('mongoose');
const Schema = mongoose.Schema

const routesSchema = new Schema({
    from: String,
    to: String,
    fare: Number,
    stops: [String],
    distance: Number,
    estimated_time_min: Number
});

module.exports = mongoose.model('Route', routesSchema);