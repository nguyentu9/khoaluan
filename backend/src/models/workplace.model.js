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
        insiderID: {
            type: DataTypes.BOOLEAN,
        },
        isInsider: {
            type: DataTypes.BOOLEAN,
        },
        isHeadOfDept: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        isDeputyOfDept: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        isStudent: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        isStaff: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        workplaceOutside: {
            type: DataTypes.STRING,
        },
    },
    { timestamps: false }
);

module.exports = WorkPlace;
