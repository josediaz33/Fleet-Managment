const mongoose = require('mongoose');

const choferSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  licencia: { type: String, required: true },
  telefono: { type: String, required: true }
}, { timestamps: true });

const Chofer = mongoose.model('Chofer', choferSchema);

module.exports = Chofer;
