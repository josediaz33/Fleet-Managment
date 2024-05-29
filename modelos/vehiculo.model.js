const mongoose = require('mongoose');

const vehiculoSchema = new mongoose.Schema({
  chapa: { type: String, required: true},
  modelo: { type: String, required: true },
  marca: { type: String, required: true },
  detallesTecnicos: { type: String, required: false }
}, { timestamps: true });

const Vehiculo = mongoose.model('Vehiculo', vehiculoSchema);

module.exports = Vehiculo;
