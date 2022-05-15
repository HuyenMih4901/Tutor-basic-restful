const Tutor = require("../model/tutor")
module.exports = ({
    createRegis: async (req, res, next) => {
        const Res = new Tutor(req.body);
        console.log(req.body);
        await Res.save();
    
        console.log(Res);
        return res.status(200).json(Res);    
    },
    getTutor: async (req, res, next) => {
        const tutor = await Tutor.find();
        res.json( tutor );
    },
})