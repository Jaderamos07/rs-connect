const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get('/registro', usuarioController.getRegistroForm);
router.post('/', usuarioController.crearUsuario);
router.get('/', usuarioController.listarUsuarios);

module.exports = router;