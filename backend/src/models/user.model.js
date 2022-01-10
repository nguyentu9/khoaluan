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
    isStudent: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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
    nationalID: {
        type: DataTypes.STRING(12),
        allowNull: false,
        unique: {
            args: true,
            msg: "Số CMND đã được sử dụng!",
        },
    },
    nationalIDImg: {
        type: DataTypes.STRING,
    },
    hash: {
        type: DataTypes.STRING,
        unique: {
            args: true,
            msg: "Ảnh CMND đã được sử dụng!. Vui lòng tải lên iại.",
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
    bankNumber: {
        type: DataTypes.STRING(12),
        unique: {
            args: true,
            msg: "Số tài khoản đã được sử dụng!",
        },
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
