const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_ACCOUNT,
    process.env.DB_PASSWORD,
    {
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
    }
);

module.exports = sequelize;
