const { DataTypes } = require("sequelize/dist");
const Degree = require("./degree.model");
const Department = require("./department.model");
const Faculty = require("./faculty.model");
const JobTitle = require("./jobTitle.model");
const Major = require("./major.model");
const User = require("./user.model");

// ========= User 1-1 Faculty ========
User.hasOne(Faculty, {
    as: "Dean",
    foreignKey: {
        as: "Dean",
        name: "dean",
        type: DataTypes.UUID,
        allowNull: false,
    },
    constraints: true,
});
User.hasOne(Faculty, {
    as: "ViceDean",
    foreignKey: {
        name: "viceDean",
        type: DataTypes.UUID,
        allowNull: false,
    },
    constraints: true,
});

Faculty.belongsTo(
    User,
    {
        foreignKey: "dean",
    },
    {
        foreignKey: "viceDean",
    }
);

// ========= User 1 - 1 Department ========
User.hasOne(Department, {
    foreignKey: {
        name: "headOfDept",
        type: DataTypes.UUID,
        allowNull: false,
    },
    constraints: true,
});
User.hasOne(Department, {
    foreignKey: {
        name: "deputyOfDept",
        type: DataTypes.UUID,
        allowNull: false,
    },
    constraints: true,
});

Department.belongsTo(
    User,
    {
        foreignKey: "headOfDept",
    },
    {
        foreignKey: "deputyOfDept",
    }
);

// ========= Major 1 - N User ========
Major.hasMany(User, {
    foreignKey: {
        type: DataTypes.UUID,
        allowNull: false,
    },
});
User.belongsTo(Major);

// ========= Faculty 1 - N Major ========
// Faculty.hasMany(Major, {
//     foreignKey: {
//         type: DataTypes.UUID,
//         allowNull: false,
//     },
// });
// Major.belongsTo(Faculty);

// ========= Degree 1 - N User ========
Degree.hasMany(User, {
    foreignKey: {
        type: DataTypes.UUID,
        allowNull: false,
    },
});
User.belongsTo(Degree);

// ========= JobTitle 1 - N User ========
JobTitle.hasMany(User, {
    foreignKey: {
        type: DataTypes.UUID,
        allowNull: false,
    },
});
User.belongsTo(JobTitle);
