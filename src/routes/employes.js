const express = require("express");
const router = express.Router();
const mysqlConnection = require("../database");

//Crear rutas

router.get("/ObtenerUsuarios", (req, res) => {
  mysqlConnection.query("select * from employes", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});
//obtener mediante el ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    "select * from employes where id=?",
    [id],
    (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    }
  );
});

//ruta para gaurdar datos
router.post("/", (req, res) => {
  const { id, name, salary } = req.body;
  const query = `
  SET @id = ?;
    SET @name = ?;
    SET @salary = ?;
    CALL employeeAddOrEdit(@id, @name, @salary);
    `;
  mysqlConnection.query(query, [id, name, salary], (err, rows, fields) => {
    if (!err) {
      res.json({ Status: `Employeed Saved` });
    } else {
      console.log(err);
    }
  });
});

//Actualizar

router.put("/:id", (req, res) => {
  const { name, salary } = req.body;
  const { id } = req.params;
  const query = `CALL employeeAddOrEdit(?, ?, ?);`;
  mysqlConnection.query(query, [id, name, salary], (err, rows, fields) => {
    if (!err) {
      res.json({ Status: "Employee Updated" });
    } else {
      console.log(err);
    }
  });
});

//Borrar

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    "delete from employes where id =?",
    [id],
    (err, rows, fields) => {
      if (!err) {
        res.json({ Status: "Employee Deleted" });
      } else {
        console.log(err);
      }
    }
  );
});

module.exports = router;
