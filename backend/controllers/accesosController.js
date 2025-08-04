// controllers/pagosController.js
const pool = require('../db');

exports.crearPago = async (req, res) => {
  try {
    const { usuario_id, monto, metodo_pago, compra_id } = req.body;
    const [result] = await pool.query(
      'INSERT INTO pagos (usuario_id, monto, metodo_pago, compra_id, estado) VALUES (?, ?, ?, ?, ?)',
      [usuario_id, monto, metodo_pago, compra_id || null, 'completado']
    );

    res.status(201).json({ mensaje: 'Pago registrado exitosamente', id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar el pago', detalle: error.message });
  }
};

exports.obtenerPagosPorUsuario = async (req, res) => {
  try {
    const { usuario_id } = req.params;
    const [pagos] = await pool.query(
      'SELECT * FROM pagos WHERE usuario_id = ?',
      [usuario_id]
    );
    res.json(pagos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener pagos' });
  }
};
