const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const { v4: uuidv4 } = require("uuid");

const Topic = sequelize.define(
    "Topic",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: sequelize.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: {
                args: true,
                msg: "Tên đề tài đã tồn tại",
            },
        },
        registrationDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        duration: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        totalExpense: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        depositAmount: {
            type: DataTypes.INTEGER.UNSIGNED,
            default: 0,
        },
        depositDate: {
            type: DataTypes.DATE,
        },
    },
    {
        timestamps: false,
    }
);

Topic.beforeCreate(async (topic, options) => {
    return (topic.id = uuidv4());
});

Topic.beforeBulkCreate(async (topic, options) => {
    return (topic.id = uuidv4());
});

module.exports = Topic;
