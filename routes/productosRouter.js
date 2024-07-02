const express = require("express");
const router = express.Router();

const { traerProductos, traerUnProducto, crearProducto, actualizarProducto, borrarProducto} =  require("../controllers/productosControllers.js")

router.get ("/", traerProductos);
router.get ("/:id", traerUnProducto);
router.post ("/", crearProducto);
router.put ("/:id", actualizarProducto);
router.delete ("/:id", borrarProducto);

module.exports = router;