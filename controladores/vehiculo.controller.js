const Vehiculo = require('../modelos/vehiculo.model');

exports.crearVehiculo = async (req, res) => {
  try {
    const nuevoVehiculo = new Vehiculo(req.body);
    const vehiculoGuardado = await nuevoVehiculo.save();
    res.status(201).json(vehiculoGuardado);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.obtenerVehiculos = async (req, res) => {
  try {
    const vehiculos = await Vehiculo.find();
    res.json(vehiculos);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.actualizarVehiculo = async (req, res) => {
  try {
    const vehiculoActualizado = await Vehiculo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!vehiculoActualizado) {
      return res.status(404).send('El vehículo no existe.');
    }
    res.json(vehiculoActualizado);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.eliminarVehiculo = async (req, res) => {
  try {
    const vehiculoEliminado = await Vehiculo.findByIdAndDelete(req.params.id);
    if (!vehiculoEliminado) {
      return res.status(404).send('El vehículo no existe.');
    }
    res.send('Vehículo eliminado con éxito.');
  } catch (error) {
    res.status(500).send(error);
  }
};