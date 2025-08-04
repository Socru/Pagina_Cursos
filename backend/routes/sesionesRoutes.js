const express = require('express');
const router = express.Router();
const sesionesController = require('../controllers/sesionesController');

// Obtener todas las sesiones
router.get('/', sesionesController.obtenerSesiones);

// Obtener una sesión por ID
router.get('/:id', sesionesController.obtenerSesionPorId);

// Crear nueva sesión
router.post('/', sesionesController.crearSesion);

// Finalizar sesión (actualizar campo `fin`)
router.put('/:id/finalizar', sesionesController.finalizarSesion);

module.exports = router;
