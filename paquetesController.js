const Paquetes = require('../models/paquetes');

exports.getAll = async (req, res) => {
    const data = await Paquetes.find();
    res.json(data);
};

exports.getById = async (req, res) => {
    const item = await Paquetes.findById(req.params.id);
    res.json(item);
};

exports.create = async (req, res) => {
    const nuevo = new Paquetes(req.body);
    const guardado = await nuevo.save();
    res.json(guardado);
};

exports.update = async (req, res) => {
    const actualizado = await Paquetes.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(actualizado);
};

exports.remove = async (req, res) => {
    await Paquetes.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Paquetes eliminado' });
};