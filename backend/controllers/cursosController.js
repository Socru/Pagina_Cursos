const pool = require('../db');

exports.obtenerCursos = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM cursos');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener cursos' });
  }
};

exports.obtenerCursoPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query('SELECT * FROM cursos WHERE id = ?', [id]);
    if (rows.length === 0) return res.status(404).json({ message: 'Curso no encontrado' });
    res.json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener curso' });
  }
};

exports.crearCurso = async (req, res) => {
  try {
    const { titulo, descripcion, precio, nivel } = req.body;
    const [result] = await pool.query(
      'INSERT INTO cursos (titulo, descripcion, precio, nivel) VALUES (?, ?, ?, ?)',
      [titulo, descripcion, precio, nivel]
    );
    res.status(201).json({ message: 'Curso creado', id: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear curso' });
  }
};

exports.actualizarCurso = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, descripcion, precio, nivel } = req.body;
    const [result] = await pool.query(
      'UPDATE cursos SET titulo = ?, descripcion = ?, precio = ?, nivel = ? WHERE id = ?',
      [titulo, descripcion, precio, nivel, id]
    );
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Curso no encontrado' });
    res.json({ message: 'Curso actualizado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar curso' });
  }
};

exports.eliminarCurso = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query('DELETE FROM cursos WHERE id = ?', [id]);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Curso no encontrado' });
    res.json({ message: 'Curso eliminado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar curso' });
  }
};
