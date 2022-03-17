const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const TopicStatus = sequelize.define("Topicstatus", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    nextStatus: {
        type: DataTypes.INTEGER,
    },
});
module.exports = TopicStatus;
