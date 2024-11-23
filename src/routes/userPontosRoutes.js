const express = require('express');
const router = express.Router();
const userPontosController = require('../controllers/userPontosController');


router.post('/', userPontosController.createUserPontos);

module.exports = router;
