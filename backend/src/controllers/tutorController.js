const Tutor = require("../model/tutor")
module.exports = ({
    createRegis: async (req, res, next) => {
        const Res = new Tutor(res.body);
    
        await Res.save();
    
        return req.json(Res);    
    }
})