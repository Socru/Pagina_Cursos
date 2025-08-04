// routes/accesosRoutes.js
const express = require('express');
const router = express.Router();
const accesosController = require('../controllers/accesosController');

router.post('/accesos', accesosController.darAcceso);
router.get('/accesos/usuario/:usuario_id', accesosController.obtenerCursosUsuario);

module.exports = router;
