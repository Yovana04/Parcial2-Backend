const Productos = require('../models/productos');

exports.getAll = async (req, res) => {
    const data = await Productos.find();
    res.json(data);
};

exports.getById = async (req, res) => {
    const item = await Productos.findById(req.params.id);
    res.json(item);
};

exports.create = async (req, res) => {
    const nuevo = new Productos(req.body);
    const guardado = await nuevo.save();
    res.json(guardado);
};

exports.update = async (req, res) => {
    const actualizado = await Productos.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(actualizado);
};

exports.remove = async (req, res) => {
    await Productos.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Productos eliminado' });
};