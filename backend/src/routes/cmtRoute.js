const express = require("express");
const router = express.Router();
const cmtController = require("../controllers/cmtController");

router.get("/", cmtController.getAllCmt);
router.post("/:id", cmtController.createCmt);
router.put( "/:id", cmtController.updateCmtByID);
module.exports = router;