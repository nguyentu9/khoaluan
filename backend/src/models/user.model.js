const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const { v4: uuidv4 } = require("uuid");

const User = sequelize.define("User", {
    id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4(),
        primaryKey: true,
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: { args: [5, 50], msg: "Họ tên phải chứa từ 5 đến 50 ký tự" },
            notEmpty: {
                msg: "Họ tên không được trống",
            },
        },
    },
    birthday: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    gender: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    isStudent: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    isInsider: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },

    sientificTitle: {
        type: DataTypes.STRING,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    idcard: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    issuedDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    issuedPlace: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bankNumber: {
        type: DataTypes.STRING,
        unique: true,
    },
    bankBranch: {
        type: DataTypes.STRING,
    },
    isBlock: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    resetToken: {
        type: DataTypes.STRING,
    },
});

module.exports = User;
