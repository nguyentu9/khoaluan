const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("khoaluan", "root", "12345678", {
    host: "localhost",
    dialect: "mysql",
    logging: false,
    define: {
        freezeTableName: true,
    },
    dialectOptions: {
        multipleStatements: true,
    },
    pool: {
        max: 10,
    },
});

module.exports = sequelize;
