const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");
const Keyword = sequelize.define(
    "keyword",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
);
module.exports = Keyword;
