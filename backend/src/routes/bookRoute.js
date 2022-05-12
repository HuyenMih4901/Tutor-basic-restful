const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

router.get("/", bookController.getAllBooks);
// router.post("/:id", bookController.createBook);
router.put(
  "/:id", bookController.updateProductByID);
router.delete(
  "/:id", bookController.deleteProductByID);

module.exports = router;