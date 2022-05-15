const ClassDetail = require("../model/classdetail");

module.exports = {
    getClassDetail: async (req, res, next) => {
        const classdetail = await ClassDetail.find();
        res.json( classdetail );
    },
    getClassById: async (req, res, next) => {
        const findclass = await ClassDetail.findOne({id: req.params.id});
        res.json( findclass );
    }
}