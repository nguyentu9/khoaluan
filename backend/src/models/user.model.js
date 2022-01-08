const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const messageVN = require("../constant/validationMsg");

const User = sequelize.define("User", {
    id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4(),
        primaryKey: true,
    },
    fullName: {
        type: DataTypes.STRING(40),
        allowNull: false,
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
        type: DataTypes.STRING(50),
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
        type: DataTypes.STRING(11),
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
        type: DataTypes.STRING(50),
    },
    workplaceOutside: {
        type: DataTypes.STRING(50),
    },
    address: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    idcard: {
        type: DataTypes.STRING(12),
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
        type: DataTypes.STRING(12),
        unique: true,
    },
    bankBranch: {
        type: DataTypes.STRING(50),
    },
    isBlock: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    resetToken: DataTypes.STRING,
});

User.beforeCreate(async (user, options) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
});

User.beforeBulkCreate(async (user, options) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
});
module.exports = User;
