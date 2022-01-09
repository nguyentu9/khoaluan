const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const UserPermission = sequelize.define(
    "UserPermission",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
);
module.exports = UserPermission;
