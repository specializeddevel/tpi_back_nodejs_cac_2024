const db = require("../data/db.js");

const {DataTypes} = require("sequelize");

const productosModel = db.define( "productos", {
    nombre: {type:DataTypes.STRING},
    descripcion: {type:DataTypes.STRING},
    foto: {type:DataTypes.STRING},
    precio: {type:DataTypes.DOUBLE},
    cantidad_disponible: {type:DataTypes.INTEGER},
    sku: {type:DataTypes.STRING}
});

module.exports = productosModel;