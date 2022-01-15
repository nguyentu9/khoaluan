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
const Scores = require("./scores.model");
const TopicMember = require("./topicMember.model");
const UserPermission = require("./userPermission.model");
const Council = require("./council.model");
const WorkPlace = require("./workplace.model");
const Status = require("./status.model");
const TopicStatus = require("./topicStatus.model");

// ========= FacDept 1 - N Workplace ========

FacDept.hasMany(WorkPlace, {
    foreignKey: {
        name: "facdeptID",
        constraints: false,
    },
});
WorkPlace.belongsTo(FacDept, {
    foreignKey: {
        name: "facdeptID",
        constraints: false,
    },
});

// ========= Workplace 1 - 1 User ========
User.hasOne(WorkPlace, {
    foreignKey: {
        name: "userID",
        // constraints: true,
        unique: true,
    },
});
WorkPlace.belongsTo(User, {
    foreignKey: {
        name: "userID",
        // constraints: true,
        unique: true,
    },
});

// ========= FacDept 1 - N Major ========
FacDept.hasMany(Major, {
    foreignKey: {
        name: "facultyID",
        constraints: true,
    },
});
Major.belongsTo(FacDept, {
    foreignKey: {
        name: "facultyID",
        constraints: true,
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
    },
});

User.belongsTo(UserRole, {
    foreignKey: "roleID",
});

// ========= UserRole N - N Permission ========
UserRole.belongsToMany(Permission, {
    through: UserPermission,
    foreignKey: "userRoleID",
    constraints: true,
});
Permission.belongsToMany(UserRole, {
    through: UserPermission,
    foreignKey: "permissionID",
    constraints: true,
});

// ========= Topic 1 - N TopicMember 1 - N User ========
Topic.belongsToMany(User, {
    through: TopicMember,
    foreignKey: "topicID",
    constraints: true,
});
User.belongsToMany(Topic, {
    through: TopicMember,
    foreignKey: "userID",
    constraints: true,
});

Topic.hasMany(TopicMember, { foreignKey: "topicID" });
User.hasMany(TopicMember, { foreignKey: "userID" });

TopicMember.belongsTo(Topic, { foreignKey: "topicID" });
TopicMember.belongsTo(User, { foreignKey: "userID" });

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

// ========= Topic 1 - N User (Instructor) ========
User.hasMany(Topic, { as: "Instructor", foreignKey: "instructor" });
Topic.belongsTo(User, { as: "Instructor", foreignKey: "instructor" });

// ========= Topic 1 - N Status ========

Topic.belongsToMany(Status, {
    through: TopicStatus,
    foreignKey: "topicID",
    // constraints: false,
});
Status.belongsToMany(Topic, {
    through: TopicStatus,
    foreignKey: "statusID",
    // constraints: false,
});

Status.hasMany(TopicStatus, { foreignKey: "statusID" });
Topic.hasMany(TopicStatus, { foreignKey: "topicID" });
TopicStatus.belongsTo(Status, { foreignKey: "statusID" });
TopicStatus.belongsTo(Topic, { foreignKey: "topicID" });

// ========= Topic 1 - N Council ========
Topic.hasMany(Council, { constraints: true, foreignKey: "topicID" });
Council.belongsTo(Topic, { constraints: true, foreignKey: "topicID" });

// ========= Council 1 - 1 CouncilType ========
const CouncilType = sequelize.define(
    "CouncilType",
    {
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
    },
    {
        timestamps: false,
    }
);
CouncilType.hasMany(Council, {
    constraints: true,
    foreignKey: "councilTypeID",
});
Council.belongsTo(CouncilType, {
    constraints: true,
    foreignKey: "councilTypeID",
});
