const express = require("express");
const router = express.Router();
const TutorController = require("../controllers/tutorController");

router.get('/', function(req, res, next) {
    res.render('userview');
});
router.post("/create", TutorController.createRegis);
router.get('/:id',TutorController.getTutor);

module.exports = router;