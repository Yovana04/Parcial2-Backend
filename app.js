require('dotenv').config(); // Cargar variables de entorno

const express = require('express');
const mongoose = require('mongoose');
const logger = require('./middlewares/logger');

const productosRoutes = require('./routes/productos');
const paquetesRoutes = require('./routes/paquetes');
const reservasRoutes = require('./routes/reservas');
const contactosRoutes = require('./routes/contactos');

const app = express();

app.use(express.json());
app.use(logger);

// Rutas
app.use('/api/productos', productosRoutes);
app.use('/api/paquetes', paquetesRoutes);
app.use('/api/reservas', reservasRoutes);
app.use('/api/contactos', contactosRoutes);

// Verifica que la URI se está leyendo bien
console.log('Mongo URI:', process.env.MONGO_URI);

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Conectado a MongoDB');
    app.listen(3000, () => {
      console.log('Servidor en puerto 3000');
    });
  })
  .catch(err => console.error('Error de conexión:', err));
