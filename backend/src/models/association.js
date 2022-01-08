const sequelize = require("../config/db");
const { DataTypes } = require("sequelize/dist");
const Degree = require("./degree.model");
const FacDept = require("./facdept.model");
const JobTitle = require("./jobTitle.model");
const Major = require("./major.model");
const User = require("./user.model");
const UserRole = require("./userRole.model");
const Permission = require("./permission.model");

const WorkPlace = sequelize.define(
    "workplace",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        isHeadOfDept: {
            type: DataTypes.BOOLEAN,
        },
        isDeputyOfDept: {
            type: DataTypes.BOOLEAN,
        },
        isStaff: {
            type: DataTypes.BOOLEAN,
        },
    },
    { timestamps: false }
);

FacDept.belongsToMany(User, {
    through: WorkPlace,
});

User.belongsToMany(FacDept, {
    through: WorkPlace,
});

// ========= FacDept 1 - N Major ========
FacDept.hasMany(Major, {
    foreignKey: {
        name: "facultyID",
        type: DataTypes.UUID,
        allowNull: false,
    },
});
// ========= Major 1 - N User ========
Major.hasMany(User, {
    foreignKey: {
        name: "majorID",
        type: DataTypes.UUID,
        allowNull: false,
    },
});
User.belongsTo(Major, { foreignKey: "majorID" });

// ========= Degree 1 - N User ========
Degree.hasMany(User, {
    foreignKey: {
        name: "degreeID",
        type: DataTypes.UUID,
        allowNull: false,
    },
    constraints: true,
});
User.belongsTo(Degree, {
    foreignKey: "degreeID",
});

// ========= JobTitle 1 - N User ========
JobTitle.hasMany(User, {
    foreignKey: {
        name: "jobTitleID",
        type: DataTypes.UUID,
    },
});
User.belongsTo(JobTitle, {
    foreignKey: "jobTitleID",
});

// ========= UserRole 1 - N User ========
UserRole.hasMany(User, {
    foreignKey: {
        name: "roleID",
        type: DataTypes.UUID,
        allowNull: false,
    },
});

User.belongsTo(UserRole, {
    foreignKey: "roleID",
});

// ========= UserRole N - N Permission ========
const UserPermission = sequelize.define(
    "UserPermission",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
);
UserRole.belongsToMany(Permission, { through: UserPermission });
Permission.belongsToMany(UserRole, { through: UserPermission });
