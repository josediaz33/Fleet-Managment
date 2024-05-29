const OrdenTrabajo = require('./ordenTrabajo.model');

const calcularKilometraje = async () => {
  try {
    // Obtener todas las órdenes de trabajo
    const ordenes = await OrdenTrabajo.find();
    // Calcular el kilometraje total, por vehículo y por chofer
    let kilometrajeTotal = 0;
    const kilometrajePorVehiculo = {};
    const kilometrajePorChofer = {};

    ordenes.forEach(orden => {
      const kmRecorridos = orden.kmFinal - orden.kmInicial;
      kilometrajeTotal += kmRecorridos;

      // Acumular kilometraje por vehículo
      if (kilometrajePorVehiculo[orden.vehiculo]) {
        kilometrajePorVehiculo[orden.vehiculo] += kmRecorridos;
      } else {
        kilometrajePorVehiculo[orden.vehiculo] = kmRecorridos;
      }

      // Acumular kilometraje por chofer
      if (kilometrajePorChofer[orden.chofer]) {
        kilometrajePorChofer[orden.chofer] += kmRecorridos;
      } else {
        kilometrajePorChofer[orden.chofer] = kmRecorridos;
      }
    });

    return {
      total: kilometrajeTotal,
      porVehiculo: kilometrajePorVehiculo,
      porChofer: kilometrajePorChofer
    };
  } catch (error) {
    console.error('Error al calcular el kilometraje:', error);
    throw error;
  }
};

module.exports = calcularKilometraje;
