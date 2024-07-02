const {Sequelize} = require("sequelize");

const db = new Sequelize("u666747503_classlodge","u666747503_classlodge", "ClassLodge123!", {
    host: "154.56.47.204",
    dialect: "mysql",
    port: 3306
});

module.exports = db;