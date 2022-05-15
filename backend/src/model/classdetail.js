const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ClassDetailSchema = new Schema({
    _id: false,
    id: {
        type: String,
        unique: true,
        index: true,
        sparse:true,
        required: true
    },
    status: {
        type: String,
    },
    name: {
        type: String,
    },
    add: {
        type: String,
    },
    price: {
        type: String,
    },
    des: {
        type: String,
    },
    time: {
        type: String,
    },
    sex: {
        type: String,
    },
    level: {
        type: String,
    },
    subject: {
        type: String,
    },
    cost: {
        type: String,
    }
})

module.exports = mongoose.model('ClassDetail', ClassDetailSchema)