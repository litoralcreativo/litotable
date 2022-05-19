const express = require('express');
const router = express.Router();
const financiacionesController = require('../controllers/financiacionesController');

router.get('/:size', financiacionesController.getRandom)
router.patch('/verify', financiacionesController.verifyOne)
router.delete('/', financiacionesController.deleteOne)
router.delete('/multiple', financiacionesController.deleteMultiple)

module.exports = router;