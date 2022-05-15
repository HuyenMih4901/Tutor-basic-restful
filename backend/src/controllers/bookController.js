const Book = require("../model/book");

module.exports = {
    getAllBooks: async (req, res, next) => {
        const books = await Book.find();
        res.json( books );
    },
    
    deleteProductByID: async (req, res, next) => {
        const book = await Book.findOneAndDelete({id: req.params.id});
        res.json("OK!");
    },
    // updateProductByID: async (res, req, next) => {
    //     const book = await Book.findByIdAndUpdate(
    //         res.params.id,
    //         res.body,
    //         { new : true }
    //         );
    //     req.json(book);
    // }
}