// const express = require('express');
// const cors = require("cors")
// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(cors())
// require("./config/mongoose.config")
// app.get('/', (req, res) => {
//   res.send('Hola Mundo MERN!');
// });

// app.listen(PORT, () => {
//   console.log(`Servidor corriendo en el puerto ${PORT}`);
// });

// require('./config/mongoose.config'); // This is new
// app.use(cors());
// app.listen(8000, () => {
//     console.log("Listening at Port 8000")
// })
const express = require('express');
const cors = require('cors');
const app = express();

// Conexión a la base de datos
require('./config/mongoose.config');

// Middleware para CORS y parsing de JSON y URL-encoded bodies
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
require('./rutas/ordenTrabajo.routes')(app);
require('./rutas/vehiculo.routes')(app);
require('./rutas/chofer.routes')(app);

// Iniciar el servidor
app.listen(3000, () => {
    console.log("Listening at Port 3000")
});
