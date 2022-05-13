const express = require('express');
const router = express.Router();
const financiacionesController = require('../controllers/financiacionesController');

router.get('/:size', financiacionesController.getRandom)
router.post('/', financiacionesController.createOne)
router.delete('/', financiacionesController.deleteOne)

module.exports = router;