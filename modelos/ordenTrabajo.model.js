const mongoose = require('mongoose');

const ordenTrabajoSchema = new mongoose.Schema({
  chapa: { type: String, required: true},//, unique: true },
  vehiculo: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehiculo' },
  chofer: { type: mongoose.Schema.Types.ObjectId, ref: 'Chofer' },
  kmInicial: { type: Number, required: true },
  kmFinal: { type: Number, required: true },
  fechaInicio: { type: Date, required: true },
  fechaFin: { type: Date },
  finalizada: { type: Boolean, default: false }, // Campo nuevo para indicar si la orden está finalizada
}, { timestamps: true });

const OrdenTrabajo = mongoose.model('OrdenTrabajo', ordenTrabajoSchema);

module.exports = OrdenTrabajo;
