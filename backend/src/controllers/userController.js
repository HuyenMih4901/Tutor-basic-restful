const User = require("../model/user")
module.exports = ({
    getUser: async (req, res, next) => {
        const user = await User.find();
        res.json( user );
    },
    updateUserByID: async (req, res, next) => {
            const user = await User.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new : true }
                );
            res.json(user);
    }
})