const express = require('express');
const router = express.Router();
const financiacionesController = require('../controllers/financiacionesController');

router.get('/:size', financiacionesController.getRandom)

module.exports = router;