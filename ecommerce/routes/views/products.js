const express = require("express");
const router = express.Router();
const ProductsService = require("../../services/products");

const productService = new ProductsService();

// trabajamos el router de la siguiente forma cuando el cliente llame get
router.get("/", async function (req, res, next) {
  const { tags } = req.query;
  try {
    const products = await productService.getProducts({ tags });
    res.render("products", { products });
  } catch (err) {
    next(err);
  }
});

// Exportamos modulo router
module.exports = router;
