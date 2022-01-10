const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const { v4: uuidv4 } = require("uuid");

const FacDept = sequelize.define(
    "Facdept",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: uuidv4(),
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        type: {
            type: DataTypes.ENUM("faculty", "department"),
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
);

module.exports = FacDept;
