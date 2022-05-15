const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TutorSchema = new Schema({
    _id: false,
    id: {
        type: String,
        unique: true,
        index: true,
        sparse:true,
        required: true
    },
    firstname: {
        type: String,
    },
    name: {
        type: String,
    },
    sdt: {
        type: String,
    },
    email: {
        type: String,
    },
    school: {
        type: String,
    },
    level: {
        type: String,
    },
    subject: {
        type: String,
    },
})

module.exports = mongoose.model('Tutor', TutorSchema)