const mongoose = require('mongoose');
require('dotenv').config();
async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            family: 4
        });
        
        console.log('ok');
    } catch (error) {
        console.log(error);
    }
}

module.exports = { connect };