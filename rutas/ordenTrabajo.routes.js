// const express = require('express');
// const router = express.Router();
// const OrdenTrabajo = require('../modelos/ordenTrabajo.model');

// // Obtener todas las órdenes de trabajo
// router.get('/ordenes', async (req, res) => {
//   try {
//     const ordenes = await OrdenTrabajo.find();
//     res.json(ordenes);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// // Crear una nueva orden de trabajo
// router.post('/ordenes', async (req, res) => {
//   try {
//     const nuevaOrden = new OrdenTrabajo(req.body);
//     const ordenGuardada = await nuevaOrden.save();
//     res.status(201).json(ordenGuardada);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// module.exports = router;
// Rutas para Vehículo
const OrdenTrabajoController = require('../controladores/ordenTrabajo.controller');

module.exports = function(app){
    // Rutas para Orden de Trabajo
    app.get('/api/ordenes', OrdenTrabajoController.obtenerOrdenes);
    app.post('/api/ordenes', OrdenTrabajoController.crearOrden);
    app.delete('/api/ordenes/:id', OrdenTrabajoController.eliminarOrden);
    app.put('/api/ordenes/:id', OrdenTrabajoController.actualizarOrden);

}