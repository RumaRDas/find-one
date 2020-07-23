const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    title: String,
    description: String,
    cost: Number,
    categories: String,
    thumbnail: String,
    date: Date,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})
const Event = mongoose.model('Event', EventSchema);
module.exports = Event;