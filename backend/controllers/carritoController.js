const pool = require('../db');

// Obtener todos los cursos en el carrito de un usuario
exports.obtenerCarritoPorUsuario = async (req, res) => {
  const { usuario_id } = req.params;
  try {
    const [rows] = await pool.query(
      `SELECT c.id AS carrito_id, c.fecha_agregado, 
              cursos.id AS curso_id, cursos.titulo, cursos.precio, cursos.nivel 
       FROM carrito c
       JOIN cursos ON c.curso_id = cursos.id
       WHERE c.usuario_id = ?`,
      [usuario_id]
    );
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el carrito del usuario' });
  }
};

// Agregar un curso al carrito
exports.agregarAlCarrito = async (req, res) => {
  const { usuario_id, curso_id } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO carrito (usuario_id, curso_id, fecha_agregado) VALUES (?, ?, NOW())',
      [usuario_id, curso_id]
    );
    res.status(201).json({ message: 'Curso agregado al carrito', id: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al agregar curso al carrito' });
  }
};

// Eliminar un curso del carrito
exports.eliminarDelCarrito = async (req, res) => {
  const { id } = req.params; // ID del registro en el carrito
  try {
    const [result] = await pool.query('DELETE FROM carrito WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Curso no encontrado en el carrito' });
    }
    res.json({ message: 'Curso eliminado del carrito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar curso del carrito' });
  }
};

// Vaciar todo el carrito de un usuario
exports.vaciarCarrito = async (req, res) => {
  const { usuario_id } = req.params;
  try {
    await pool.query('DELETE FROM carrito WHERE usuario_id = ?', [usuario_id]);
    res.json({ message: 'Carrito vaciado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al vaciar el carrito' });
  }
};
