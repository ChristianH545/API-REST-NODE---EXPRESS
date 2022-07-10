// IMPORTACION DE MODULOS
const express = require("express");
const path = require("path");

// PARA QUE EXPRESS TRABAJE EN NUESTRO ARCHIVO
const app = express();

//IMPORTACION DE MODULO
const expressJsx = require("./express-jsx");

// SINTAXIS PARA TRABAJAR EL TEMPLETE-ENGINE
app.engine("jsx", expressJsx);
app.set("views", "./views");
app.set("views engine", "jsx");

// trabajando con PUG
app.set("views", path.join(__dirname, "views"));
app.set("views engine", "pug");

// CREAMOS LAS RUTA DE NUESTRO EN EL DIRECTORIO PRINCIPAL
app.get("/pruducts" productsRouter);

//CREAMOS NUESTRO SERVIDOR (para levantar el proyecto)
const server = app.listen(3000, function () {
  console.log(`Lisntening http://localhost:${server.address().port}`);
});
