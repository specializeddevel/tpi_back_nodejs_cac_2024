const productosModel = require("../models/productosModel");

const traerProductos = async (req, res) => {
    try {
        const productos = await productosModel.findAll();
        res.json(productos);
    } catch (error) {
        res.json({message:error.message});
    }
}

const traerUnProducto = async (req, res) => {
    try {
        const producto = await productosModel.findByPk(req.params.id);
        res.json(producto);
    } catch (error) {
        res.json({message:error.message});
    }
}

const crearProducto = async (req, res) => {
    try {
        const resultado = await productosModel.create(req.body)
        //res.json({"message":"Registro creado exitosamente"})
        res.json(resultado);
    } catch (error) {
        res.json({message:error.message});
    }
}

const actualizarProducto = async (req, res) => {
    try {
        await productosModel.update(req.body, {
            where: {id:req.params.id}
        });
        res.json("Producto actualizado con exito!");
    } catch (error) {
        res.json({message:error.message});
    }
}

const borrarProducto = async (req, res) => {
    try {
        await productosModel.destroy({
            where: {id:req.params.id}
        });
        res.json({"message":`Producto ${req.params.id} borrado con exito`});
    } catch (error) {
        res.json({message:error.message});
    }
}

module.exports = {traerProductos, traerUnProducto, crearProducto, actualizarProducto, borrarProducto};