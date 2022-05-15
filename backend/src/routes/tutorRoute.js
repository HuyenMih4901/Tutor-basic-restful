const express = require("express");
const router = express.Router();
const TutorController = require("../controllers/tutorController");

router.get('/', function(req, res, next) {
    res.render('userview');
});
router.post("#", TutorController.createRegis);
module.exports = router;