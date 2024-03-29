const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

const User = sequelize.define("User", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    avatarUrl: {
        type: DataTypes.STRING,
    },
    isInsider: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    workplaceOutside: {
        type: DataTypes.STRING,
    },
    fullName: {
        type: DataTypes.STRING(50),
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
        type: DataTypes.STRING(40),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
        unique: {
            args: true,
            msg: "Email đã được sử dụng!",
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING(11),
        allowNull: false,
        unique: {
            args: true,
            msg: "SĐT đã được sử dụng!",
        },
    },
    sientificTitle: {
        type: DataTypes.STRING(50),
    },
    address: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    nationalID: {
        type: DataTypes.STRING(12),
        allowNull: false,
        unique: {
            args: true,
            msg: "Số CMND đã được sử dụng!",
        },
    },
    issuedDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    issuedPlace: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    isActive: {
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
