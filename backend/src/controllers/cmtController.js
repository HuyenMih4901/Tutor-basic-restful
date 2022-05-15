const Cmt = require("../model/cmt");
module.exports = ({
    getAllCmt: async (req, res, next) => {
        const cmt = await Cmt.find();
        res.json( cmt );
    },
    // getCmtByID: async (req, res, next) => {
    //     const cmtID = await Cmt.findOne({id: res.params.id})
    // }
    createCmt: async (res, req, next) => {
        const cmt = new Cmt(res.body);
    
        await cmt.save();
    
        return req.json(cmt);    
    },
    updateCmtByID: async (res, req, next) => {
        const cmt = await Cmt.findOneAndUpdate(
            res.params.id,
            res.body,
            { new : true }
            );
        req.json(cmt);
    }
})
