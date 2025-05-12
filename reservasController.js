const Reserva = require('../models/reserva'); 

exports.getAll = async (req, res) => {
    const data = await Reserva.find();
    res.json(data);
};

exports.getById = async (req, res) => {
    const item = await Reserva.findById(req.params.id);
    res.json(item);
};

exports.create = async (req, res) => {
    const nuevo = new Reserva(req.body);
    const guardado = await nuevo.save();
    res.json(guardado);
};

exports.update = async (req, res) => {
    const actualizado = await Reserva.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(actualizado);
};

exports.remove = async (req, res) => {
    await Reserva.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Reserva eliminado' });
};