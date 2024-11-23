const express = require('express');
const router = express.Router();
const tarefasController = require('../controllers/tarefasController');
const usuariosController = require('../controllers/cadastroController');

// Definindo as rotas para CRUD das tarefas
router.get('/:email/:senha', usuariosController.consultarUsuario);
router.post('/', usuariosController.createUsuario);

module.exports = router;
