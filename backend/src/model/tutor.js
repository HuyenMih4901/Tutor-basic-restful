const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TutorSchema = new Schema({
    // _id: true,
    // id: {
    //     type: String,
    //     unique: true,
    //     index: true,
    //     sparse:true,
    // },
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
    },
    school: {
        type: String,
    },
    degree: {
        type: String,
    },
    subject: {
        type: String,
    },
})

module.exports = mongoose.model('Tutor', TutorSchema)