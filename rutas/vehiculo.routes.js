// const express = require('express');
// const router = express.Router();
// const Vehiculo = require('../modelos/vehiculo.model');

// // Obtener todos los vehículos
// router.get('/vehiculos', async (req, res) => {
//   try {
//     const vehiculos = await Vehiculo.find();
//     res.json(vehiculos);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// // Crear un nuevo vehículo
// router.post('/vehiculos', async (req, res) => {
//   try {
//     const nuevoVehiculo = new Vehiculo(req.body);
//     const vehiculoGuardado = await nuevoVehiculo.save();
//     res.status(201).json(vehiculoGuardado);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// module.exports = router;
const VehiculoController = require('../controladores/vehiculo.controller');

module.exports = function(app){
    // Rutas para Vehículo
    app.get('/api/vehiculos', VehiculoController.obtenerVehiculos);
    app.post('/api/vehiculos', VehiculoController.crearVehiculo);
    app.put('/api/vehiculos/:id', VehiculoController.actualizarVehiculo);
    app.delete('/api/vehiculos/:id', VehiculoController.eliminarVehiculo);
}