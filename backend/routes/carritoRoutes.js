const express = require('express');
const router = express.Router();
const carritoController = require('../controllers/carritoController');

router.get('/:usuario_id', carritoController.obtenerCarritoPorUsuario);
router.post('/', carritoController.agregarAlCarrito);
router.delete('/:id', carritoController.eliminarDelCarrito);
router.delete('/vaciar/:usuario_id', carritoController.vaciarCarrito);

module.exports = router;
