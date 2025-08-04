// routes/pagosRoutes.js
const express = require('express');
const router = express.Router();
const pagosController = require('../controllers/pagosController');

router.post('/pagos', pagosController.crearPago);
router.get('/pagos/usuario/:usuario_id', pagosController.obtenerPagosPorUsuario);

module.exports = router;
