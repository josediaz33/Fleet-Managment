
const ChoferController = require('../controladores/chofer.controller');
module.exports = function(app){
  // Rutas para Chofer
  app.get('/api/choferes', ChoferController.obtenerChoferes);
  app.post('/api/choferes', ChoferController.crearChofer);
  app.put('/api/choferes/:id', ChoferController.actualizarChofer);
  app.delete('/api/choferes/:id', ChoferController.eliminarChofer);
}
