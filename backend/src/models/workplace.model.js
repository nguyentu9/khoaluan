const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const WorkPlace = sequelize.define(
    "workplace",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        isHeadOfDept: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        isDeputyOfDept: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },
    { timestamps: false }
);

module.exports = WorkPlace;
