const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Council = sequelize.define("Council", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    createAt: {
        type: DataTypes.DATE,
        allowNull: false,

        defaultValue: DataTypes.NOW,
    },
    approvedAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    isApproved: {
        type: DataTypes.BOOLEAN,
    },
});
module.exports = Council;
