const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

const JobTitle = sequelize.define(
    "jobtitle",
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
    },
    {
        timestamps: false,
    }
);

module.exports = JobTitle;
