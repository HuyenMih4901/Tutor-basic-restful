const url = '';

fetch(url)
    .then(() => {
        headers: {
            type: 'application/post'
        }
    })
    .catch(err => {

    })
const { appendFile } = require('fs');
let classRouter = require('./routes/class');
app.use('class', classRouter);