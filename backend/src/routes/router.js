const classRoute = require('./classRoute');
const bookRoute = require('./bookRoute');
const cmtRoute = require('./cmtRoute');

const router = (app) => {
    app.use('/api/classlist', classRoute);
    app.use('/api/book', bookRoute);
    app.use('/api/cmt', cmtRoute);
}

module.exports = router;