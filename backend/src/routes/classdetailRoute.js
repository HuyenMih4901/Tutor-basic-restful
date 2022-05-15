const classdetailController = require('../controllers/classdetailController');
const express = require('express');
const router = express.Router();

router.get('/', classdetailController.getClassDetail);
router.get("/:id", classdetailController.getClassById);
module.exports = router;