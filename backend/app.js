// app.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Cargar variables de entorno
dotenv.config();

// Importar rutas
const accesosRoutes = require('./routes/accesosRoutes');
const carritoRoutes = require('./routes/carritoRoutes');
const comprasRoutes = require('./routes/comprasRoutes');
const cursosRoutes = require('./routes/cursosRoutes');
const pagosRoutes = require('./routes/pagosRoutes');
const sesionesRoutes = require('./routes/sesionesRoutes');
const usuariosRoutes = require('./routes/usuariosRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/accesos', accesosRoutes);
app.use('/api/carrito', carritoRoutes);
app.use('/api/compras', comprasRoutes);
app.use('/api/cursos', cursosRoutes);
app.use('/api/pagos', pagosRoutes);
app.use('/api/sesiones', sesionesRoutes);
app.use('/api/usuarios', usuariosRoutes);

// Ruta base de prueba
app.get('/', (req, res) => {
  res.send('Servidor funcionando');
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
