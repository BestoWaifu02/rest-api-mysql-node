const express = require("express");
const app = express();

//  SETTINGS
//cuando el server arroja un puerto, en caso contrario sera al 3000
app.set("port", process.env.PORT || 3000);

//Middlewares (funcionces que se ejecutan antes de llegar a las funcionalidades de las rutas)
app.use(express.json());

//Routes (rutas en las que se comunicara el server)
app.use(require("./routes/employes.js"));
//Iniciarlizacion del server en el puerto 3000
app.listen(app.get("port"), () => {
  console.log("server on port", app.get("port"));
});
