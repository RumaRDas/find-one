const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
address:{
    type: String
},
register_date: {
    type: Date,
    default: Date.now
},
address_id:{
    type: String,
    unique: true
},
user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
}
},{
toJSON: {
    virtuals: true
}
}
)

const Image = mongoose.model('Image', ImageSchema);
module.exports = Image;