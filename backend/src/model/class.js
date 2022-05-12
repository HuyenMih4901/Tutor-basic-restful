const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ClassSchema = new Schema({
    _id: false,
    id: {
        type: String,
        unique: true,
        index: true,
        sparse:true,
        required: true
    },
    name: {
        type: String,
    },
    price: {
        type: String,
    },
    time: {
        type: String,
    },
    add: {
        type: String,
    },
    des: {
        type: String,
    }
})

module.exports = mongoose.model('Class', ClassSchema)