const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("", "root", "12345678", {
    host: "localhost",
    dialect: "mysql",
    logging: false,
});

module.exports = sequelize;
