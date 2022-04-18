const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController.js');

router.get('/', userController.getAll)

module.exports = router;