const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    title: String,
    description: String,
    cost: Number,
    categories: String,
    thumbnail: String,
    contact: String,
    date:{ type: Date, default: Date.now },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    toJSON: {
        virtuals: true
    }
}
)
EventSchema.virtual('thumbnail_url').get(function () { return `http://localhost:4000/files/${this.thumbnail}` })
const Event = mongoose.model('Event', EventSchema);
module.exports = Event;