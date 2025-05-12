// models/contacto.js
const mongoose = require('mongoose');

const contactoSchema = new mongoose.Schema({
  nombre: String,
  correo: String,
  telefono: String,
});

const Contacto = mongoose.model('Contacto', contactoSchema);

module.exports = Contacto;
