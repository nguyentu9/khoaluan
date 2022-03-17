const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const Degree = sequelize.define(
    "degree",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    },
    {
        timestamps: false,
    }
);

module.exports = Degree;
