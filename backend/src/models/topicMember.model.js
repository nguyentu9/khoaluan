const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const TopicMember = sequelize.define(
    "Topicmember",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        topicID: {
            type: DataTypes.UUID,
        },
        userID: {
            type: DataTypes.UUID,
        },
        topicRole: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
    },
    { timestamps: false }
);
module.exports = TopicMember;
