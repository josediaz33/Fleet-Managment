const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/flotaVehicular", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("BD de vehiculos en linea"))
    .catch(() => console.log("Error BD"))
