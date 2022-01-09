const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Scores = sequelize.define(
    "Scores",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        scores: {
            type: DataTypes.DECIMAL(5, 2),
            allowNull: false,
        },
    },
    { timestamps: false }
);
module.exports = Scores;
