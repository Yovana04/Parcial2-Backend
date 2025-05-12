const Contacto = require('../models/contacto');


exports.getAll = async (req, res) => {
    const data = await Contacto.find();
    res.json(data);
};

exports.getById = async (req, res) => {
    const item = await Contacto.findById(req.params.id);
    res.json(item);
};

exports.create = async (req, res) => {
    const nuevo = new Contacto(req.body);
    const guardado = await nuevo.save();
    res.json(guardado);
};

exports.update = async (req, res) => {
    const actualizado = await Contacto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(actualizado);
};

exports.remove = async (req, res) => {
    await Contacto.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Contacto eliminado' });
};