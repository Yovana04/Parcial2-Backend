const mongoose = require('mongoose');

const reservaSchema = new mongoose.Schema({
  nombreCliente: String,
  fecha: Date,
  paqueteReservado: String,
  numeroInvitados: Number,
  ubicacion: String
});

module.exports = mongoose.model('Reserva', reservaSchema);