const Chofer = require('../modelos/chofer.model');

exports.crearChofer = async (req, res) => {
  try {
    const nuevoChofer = new Chofer(req.body);
    const choferGuardado = await nuevoChofer.save();
    res.status(201).json(choferGuardado);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.obtenerChoferes = async (req, res) => {
  try {
    const choferes = await Chofer.find();
    res.json(choferes);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.actualizarChofer = async (req, res) => {
  try {
    const choferActualizado = await Chofer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!choferActualizado) {
      return res.status(404).send('El chofer no existe.');
    }
    res.json(choferActualizado);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.eliminarChofer = async (req, res) => {
  try {
    const choferEliminado = await Chofer.findByIdAndDelete(req.params.id);
    if (!choferEliminado) {
      return res.status(404).send('El chofer no existe.');
    }
    res.send('Chofer eliminado con éxito.');
  } catch (error) {
    res.status(500).send(error);
  }
};
