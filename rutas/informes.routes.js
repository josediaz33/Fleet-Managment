router.get('/informes/kilometraje', async (req, res) => {
    try {
      // Lógica para calcular el kilometraje total, por vehículo y por chofer
      const informeKilometraje = await calcularKilometraje();
      res.json(informeKilometraje);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  