const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const TopicStatus = sequelize.define(
    "Topicstatus",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        topicID: {
            type: DataTypes.UUIDV4,
        },
        statusID: {
            type: DataTypes.UUIDV4,
        },
    },
    {
        timestamps: false,
    }
);
module.exports = TopicStatus;
