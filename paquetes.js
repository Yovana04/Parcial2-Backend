const mongoose = require('mongoose');

const paquetesSchema = new mongoose.Schema({
    nombre: String,
    descripcion: String,
    precio: Number
});

module.exports = mongoose.model('Paquetes', paquetesSchema);