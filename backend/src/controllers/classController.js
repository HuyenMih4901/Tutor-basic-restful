const classlist = require('../model/class');
module.exports = {
    getAllClass: async (req, res, next) => {
        const classes = await classlist.find();
        res.json( classes );
    },
    getClassById: async (req, res, next) => {
        const findclass = await classlist.findOne({id: req.params.id});
        res.json( findclass );
    }
}