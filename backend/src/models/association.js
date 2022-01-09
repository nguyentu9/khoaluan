const sequelize = require("../config/db");
const { DataTypes } = require("sequelize/dist");
const Degree = require("./degree.model");
const FacDept = require("./facdept.model");
const JobTitle = require("./jobTitle.model");
const Major = require("./major.model");
const User = require("./user.model");
const UserRole = require("./userRole.model");
const Permission = require("./permission.model");
const Topic = require("./topic.model");
const TopicRole = require("./topicRole.model");
const Scores = require("./scores.model");
const TopicMember = require("./topicMember.model");
const UserPermission = require("./userPermission.model");

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
UserRole.belongsToMany(Permission, {
    through: UserPermission,
    foreignKey: "permissionID",
});
Permission.belongsToMany(UserRole, {
    through: UserPermission,
    foreignKey: "userRoleID",
});

// ========= Topic 1 - N TopicMember 1 - N User ========
Topic.belongsToMany(User, {
    through: TopicMember,
    foreignKey: "userID",
    constraints: true,
});
User.belongsToMany(Topic, {
    through: TopicMember,
    foreignKey: "topicID",
    constraints: true,
});

// ========= TopicRole 1 - N TopicMember ========
TopicMember.belongsTo(TopicRole, { foreignKey: "topicRoleID" });

// ========= Major 1 - N Topic ========
Topic.belongsTo(Major, { foreignKey: "majorID" });

// ========= Topic 1 - N SCORES 1 - N User ========

Topic.belongsToMany(User, {
    through: Scores,
    foreignKey: "userID",
    constraints: true,
});
User.belongsToMany(Topic, {
    through: Scores,
    foreignKey: "topicID",
    constraints: true,
});

// ========= Topic 1 - N Status ========
const Status = sequelize.define(
    "Status",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nextStatus: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
);
Topic.belongsToMany(Status, { through: "TopicStatus", foreignKey: "statusID" });
Status.belongsToMany(Topic, { through: "TopicStatus", foreignKey: "topicID" });

const Keyword = sequelize.define(
    "keyword",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
);

Topic.hasMany(Keyword, { constraints: true, foreignKey: "topicID" });
