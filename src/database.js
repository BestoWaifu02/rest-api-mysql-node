const mysql = require("mysql");

//Se crea la conexion y se manda un objeto de configuracion

const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "company",
});

mysqlConnection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log("conexion correcta ");
  }
});

module.exports = mysqlConnection;
