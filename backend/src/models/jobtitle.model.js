const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const JobTitle = sequelize.define(
    "JobTitle",
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
        freezeTableName: true,
    }
);

module.exports = JobTitle;
