const mongoose = require('mongoose');

const productosSchema = new mongoose.Schema({
    nombre: String,
    descripcion: String,
    precio: Number
});

module.exports = mongoose.model('Productos', productosSchema);