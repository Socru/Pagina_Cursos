const express = require('express');
const router = express.Router();
const comprasController = require('../controllers/comprasController');

// Obtener todas las compras
router.get('/', comprasController.obtenerCompras);

// Obtener una compra por su ID
router.get('/:id', comprasController.obtenerCompraPorId);

// Crear una nueva compra
router.post('/', comprasController.crearCompra);

// Eliminar una compra por ID
router.delete('/:id', comprasController.eliminarCompra);

module.exports = router;
