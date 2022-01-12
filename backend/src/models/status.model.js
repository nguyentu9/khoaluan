const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Status = sequelize.define(
    "Status",
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
        nextStatus: {
            type: DataTypes.INTEGER,
        },
    },
    {
        timestamps: false,
    }
);

module.exports = Status;
