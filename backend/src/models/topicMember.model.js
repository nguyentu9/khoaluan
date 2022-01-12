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
        topicRoleID: {
            type: DataTypes.UUID,
        },
    },
    { timestamps: false }
);
module.exports = TopicMember;
