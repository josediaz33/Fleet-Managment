const OrdenTrabajo = require('../modelos/ordenTrabajo.model');

exports.crearOrden = async (req, res) => {
  try {
    const nuevaOrden = new OrdenTrabajo(req.body);
    const ordenGuardada = await nuevaOrden.save();
    res.status(201).json(ordenGuardada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar la orden', error: error.message });
  }
};

exports.obtenerOrdenes = async (req, res) => {
  try {
    // Aquí utilizamos .populate() para obtener la información referenciada
    const ordenes = await OrdenTrabajo.find()
      .populate('vehiculo', 'modelo marca') // Añade los campos que quieres mostrar del vehículo
      .populate('chofer', 'nombre'); // Añade los campos que quieres mostrar del chofer
    res.json(ordenes);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.eliminarOrden = async (req, res) => {
  try {
    const orden = await OrdenTrabajo.findByIdAndDelete(req.params.id);
    if (!orden) {
      return res.status(404).json({ message: 'Orden no encontrada' });
    }
    res.status(200).json({ message: 'Orden eliminada con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar la orden', error: error.message });
  }
};

exports.actualizarOrden = async (req, res) => {
  try {
    const orden = await OrdenTrabajo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Esto es para que retorne la orden actualizada
    );
    if (!orden) {
      return res.status(404).json({ message: 'Orden no encontrada' });
    }
    res.status(200).json(orden);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar la orden', error: error.message });
  }
};


// exports.obtenerOrdenes = async (req, res) => {
//   try {
//     // Pobla los campos 'vehiculo' y 'chofer' para obtener su información relacionada
//     const ordenes = await OrdenTrabajo.find()
//                                       .populate('Vehiculo', 'chapa modelo marca')
//                                       .populate('chofer', 'nombre');
//     res.json(ordenes);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

// exports.obtenerOrdenes = async (req, res) => {
//   try {
//     const ordenes = await OrdenTrabajo.find();
//     res.json(ordenes);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };