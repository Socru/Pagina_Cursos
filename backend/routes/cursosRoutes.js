const express = require('express');
const router = express.Router();
const cursosController = require('../controllers/cursosController');

router.get('/', cursosController.obtenerCursos);

// Obtener curso por id
router.get('/:id', cursosController.obtenerCursoPorId);

// Crear un curso
router.post('/', cursosController.crearCurso);

// Actualizar un curso
router.put('/:id', cursosController.actualizarCurso);

// Eliminar un curso
router.delete('/:id', cursosController.eliminarCurso);

module.exports = router;

