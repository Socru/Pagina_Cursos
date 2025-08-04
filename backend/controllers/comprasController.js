const pool = require('../db');

// Obtener todas las compras
exports.obtenerCompras = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM compras');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener compras' });
  }
};

// Obtener compra por ID
exports.obtenerCompraPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query('SELECT * FROM compras WHERE id = ?', [id]);
    if (rows.length === 0) return res.status(404).json({ message: 'Compra no encontrada' });
    res.json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la compra' });
  }
};

// Crear una nueva compra
exports.crearCompra = async (req, res) => {
  try {
    const { usuario_id, curso_id } = req.body;
    const fecha_compra = new Date(); // Fecha actual
    const [result] = await pool.query(
      'INSERT INTO compras (usuario_id, curso_id, fecha_compra) VALUES (?, ?, ?)',
      [usuario_id, curso_id, fecha_compra]
    );
    res.status(201).json({ message: 'Compra registrada', id: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al registrar la compra' });
  }
};

// Eliminar una compra
exports.eliminarCompra = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query('DELETE FROM compras WHERE id = ?', [id]);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Compra no encontrada' });
    res.json({ message: 'Compra eliminada' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar la compra' });
  }
};
