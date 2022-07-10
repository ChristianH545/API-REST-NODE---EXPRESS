// MODULO DE IMPORTACION (REQUERIMIENTO)
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const productsRouter = require("./routes/views/products");
const productsApiRouter = require("./routes/api/products");

//APP
const app = express();

//MIDDLEWARES (GLOBALES)
app.use(bodyParser.json());

// STATIC FILES
app.use("/static", express.static(path.join(__dirname, "public")));

// VIEW ENGINE STEUP
app.set("views", path.join(__dirname, "views"));
app.set("views engine", "pug");

// ROUTES
app.use("/products", productsRouter);
app.use("/api/products", productsApiRouter);

//REDIRECT
app.get("/", function (req, res) {
  res.redirect("/products");
});

// SERVER
const server = app.listen(8001, function () {
  console.log(`Listening http://localhost:${server.address().port}`);
});
