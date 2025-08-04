const bcrypt = require('bcrypt');
const db = require('../config/db'); // o donde esté tu conexión
const jwt = require('jsonwebtoken');

const usuarioController = {
  registrar: async (req, res) => {
    const { nombre, email, contraseña, rol } = req.body;
    try {
      const hash = await bcrypt.hash(contraseña, 10);
      await db.query(
        'INSERT INTO usuarios (nombre, email, contraseña, rol) VALUES (?, ?, ?, ?)',
        [nombre, email, hash, rol]
      );
      res.status(201).json({ mensaje: 'Usuario registrado correctamente' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al registrar usuario' });
    }
  },

  login: async (req, res) => {
    const { email, contraseña } = req.body;
    try {
      const [rows] = await db.query('SELECT * FROM usuarios WHERE email = ?', [email]);
      if (rows.length === 0) return res.status(404).json({ error: 'Usuario no encontrado' });

      const usuario = rows[0];
      const match = await bcrypt.compare(contraseña, usuario.contraseña);
      if (!match) return res.status(401).json({ error: 'Contraseña incorrecta' });

      const token = jwt.sign({ id: usuario.id, rol: usuario.rol }, 'secreto', { expiresIn: '1d' });
      res.json({ mensaje: 'Login exitoso', token });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error en el login' });
    }
  },

  obtenerUsuarios: async (req, res) => {
    try {
      const [rows] = await db.query('SELECT id, nombre, email, rol FROM usuarios');
      res.json(rows);
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener usuarios' });
    }
  }
};

module.exports = usuarioController;
