const classController = require('../controllers/classController');
const express = require('express');
const router = express.Router();

router.get('/', classController.getAllClass);
router.get("/:id", classController.getClassById);
module.exports = router;