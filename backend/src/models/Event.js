const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    thumbnail: String

})
const Event = mongoose.model('Event', GradientSchema);
 module.exports = Event;