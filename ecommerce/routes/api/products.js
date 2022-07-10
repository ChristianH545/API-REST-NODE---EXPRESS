const express = require("express");
const router = express.Router();
const ProductsService = require("../../services/products");

// instanciamos porque es una class
const productsService = new ProductsService();

// armado de rutas
router.get("/", async function (req, res, next) {
  const { tags } = req.query;

  console.log("req", req.query);

  try {
    //aqui llamamos los diferentes metodos manejado desde la carpeta serviceProducts
    const products = await productsService.getProducts({ tags });

    //manejo de los status del verbo http
    res.status(200).json({
      data: products,
      message: "product listed",
    });
  } catch (err) {
    next(err);
  }
});

router.get("/:porductId", async function (req, res, next) {
  const { productId } = req.params;

  console.log("req", req.params);

  try {
    //aqui llamamos los diferentes metodos manejado desde la carpeta serviceProducts
    const getProduct = await productsService.getProducts({ productId });

    //manejo de los status del verbo http
    res.status(200).json({
      data: getProduct,
      message: "product retrieved",
    });
  } catch (err) {
    next(err);
  }
});

router.post("/", async function (req, res, next) {
  const { body: product } = req;

  console.log("req", req.body);

  try {
    //aqui llamamos los diferentes metodos manejado desde la carpeta serviceProducts
    const createProduct = await productsService.createProduct({ product });

    //manejo de los status del verbo http
    res.status(201).json({
      data: createProduct,
      message: "product listed",
    });
  } catch (err) {
    next(err);
  }
});

router.put("/:productId", async function (req, res, next) {
  const { productId } = req.params;
  const { body: product } = req;

  console.log("req", req.params, req.body);

  try {
    //carpeta serviceProducts
    const updateProduct = await productsService.updateProduct({
      productId,
      product,
    });

    //manejo de los status del verbo http
    res.status(200).json({
      data: updateProduct,
      message: "product updated",
    });
  } catch (err) {
    next(err);
  }
});

router.delete("/:productId", async function (req, res) {
  const { productId } = req.params;

  try {
    //carpeta serviceProducts
    const deleteProduct = await productsService.deleteProduct({ productId });
    res.status(200).json({
      data: deleteProduct,
      message: "product deleted",
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
