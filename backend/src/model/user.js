const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    gender: {
        type: String,
    },
    phone: {
        type: String,
    },
});
module.exports = mongoose.model('User', userSchema)