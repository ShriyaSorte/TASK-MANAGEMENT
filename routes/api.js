const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/registeruser', userController.registeruser);


module.exports = router;