const bookRoute = require('./bookRoute');
const classdetailRoute = require('./classdetailRoute');
const tutorRoute = require('./tutorRoute')
const userRoute = require('./userRoute')

const router = (app) => {
    app.use('/api/book', bookRoute);
    app.use('/api/classdetail', classdetailRoute);
    app.use('/api/register', tutorRoute);
    app.use('/api/user', userRoute)
}

module.exports = router;