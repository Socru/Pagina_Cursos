const db = require('../db');

// Obtener todas las sesiones
exports.obtenerSesiones = (req, res) => {
  const sql = 'SELECT * FROM sesiones';
  db.query(sql, (err, resultados) => {
    if (err) return res.status(500).json({ error: err });
    res.json(resultados);
  });
};

// Obtener una sesión por ID
exports.obtenerSesionPorId = (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM sesiones WHERE id = ?';
  db.query(sql, [id], (err, resultado) => {
    if (err) return res.status(500).json({ error: err });
    if (resultado.length === 0) return res.status(404).json({ mensaje: 'Sesión no encontrada' });
    res.json(resultado[0]);
  });
};

// Crear nueva sesión
exports.crearSesion = (req, res) => {
  const { usuario_id, ip, dispositivo } = req.body;
  const sql = 'INSERT INTO sesiones (usuario_id, ip, dispositivo) VALUES (?, ?, ?)';
  db.query(sql, [usuario_id, ip, dispositivo], (err, resultado) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ id: resultado.insertId, mensaje: 'Sesión creada correctamente' });
  });
};

// Finalizar sesión (actualizar campo `fin`)
exports.finalizarSesion = (req, res) => {
  const { id } = req.params;
  const sql = 'UPDATE sesiones SET fin = CURRENT_TIMESTAMP WHERE id = ?';
  db.query(sql, [id], (err, resultado) => {
    if (err) return res.status(500).json({ error: err });
    if (resultado.affectedRows === 0) return res.status(404).json({ mensaje: 'Sesión no encontrada' });
    res.json({ mensaje: 'Sesión finalizada correctamente' });
  });
};
