const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Registro
router.post('/registrar', usuarioController.registrar);

// Login
router.post('/login', usuarioController.login);

// Obtener usuarios (protegido opcionalmente)
router.get('/', usuarioController.obtenerUsuarios);

module.exports = router;
