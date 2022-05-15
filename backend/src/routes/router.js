const bookRoute = require('./bookRoute');
const cmtRoute = require('./cmtRoute');
const classdetailRoute = require('./classdetailRoute');
const tutorRoute = require('./tutorRoute')

const router = (app) => {
    // app.use('/api/classlist', classRoute);
    app.use('/api/book', bookRoute);
    app.use('/api/cmt', cmtRoute);
    app.use('/api/classdetail', classdetailRoute);
    app.use('/api/register', tutorRoute)
}

module.exports = router;