const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const TopicMember = sequelize.define(
    "TopicMember",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
    },
    { timestamps: false }
);
module.exports = TopicMember;
