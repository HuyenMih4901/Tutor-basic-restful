const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BookSchema = new Schema({
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
    subject: {
        type: String,
    },
    level: {
        type: String,
    },
})

module.exports = mongoose.model('Book', BookSchema)