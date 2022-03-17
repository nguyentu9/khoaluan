const Degree = require("../models/degree.model");
const User = require("../models/user.model");
const JobTitle = require("../models/jobTitle.model");
const Major = require("../models/major.model");
const FacDept = require("../models/facdept.model");
const UserRole = require("../models/userRole.model");
const WorkPlace = require("../models/workplace.model");
const createError = require("http-errors");
const { Op } = require("sequelize/dist");
const sequelize = require("sequelize");
const wrap = require("../middlewares/asyncError.mdw");

// @desc    Lấy thông tin cá nhân
// @route   GET /api/users/me/profile
// @access  Private
exports.getMyProfile = wrap(async (req, res) => {
    const userID = req.session.user.id;
    const user = await User.findByPk(userID, {
        attributes: {
            exclude: [
                "password",
                "nationalIDImg",
                "hash",
                "isActive",
                "resetToken",
                "createdAt",
                "updatedAt",
            ],
        },
        include: [
            { model: Degree },
            { model: JobTitle },
            {
                model: Major,
                attributes: ["name"],
            },
            {
                model: WorkPlace,
                attributes: ["insiderID", "isStudent"],
                include: [{ model: FacDept }],
            },
            { model: UserRole, attributes: ["name"] },
        ],
    });

    return res.json(user);
});

// @desc    Khoá tài khoản
// @route   PUT /api/users/isactive
// @access  Private/Admin
exports.blockUserAccount = async (req, res, next) => {};

// @desc    Tìm thành viên thêm vào đề tài
// @route   GET /api/users/members?nationalID=?name=
// @access  Private/User
exports.getMembers = async (req, res, next) => {
    let { nationalID, name } = req.query;
    if (nationalID == "" || name == "")
        return next(createError.BadRequest("Not Found!"));

    let param;
    if (nationalID) param = { nationalID };
    else if (name) param = { fullName: { [Op.substring]: name } };

    const users = await User.findAll({
        attributes: ["id", "fullName", "email"],
        where: { ...param, isActive: true },
        include: [
            {
                model: UserRole,
                attributes: ["id"],
                where: {
                    code: {
                        [Op.ne]: "admin",
                    },
                },
            },
        ],
    });
    return res.json(users);
};

// @desc    Tìm gv hướng dẫn
// @route   GET /api/users/instructor?nationalID=?name=
// @access  Private/User
exports.getInstructor = async (req, res, next) => {
    let { nationalID, name } = req.query;
    if (nationalID == "" || name == "")
        return next(createError.BadRequest("Not Found!"));

    let param;
    if (nationalID) param = { nationalID };
    else if (name) param = { fullName: { [Op.substring]: name } };

    const users = await User.findAll({
        attributes: ["id", "fullName", "email"],
        where: { ...param, isActive: true },
        include: [
            {
                model: UserRole,
                attributes: ["id"],
                where: {
                    code: {
                        [Op.ne]: "admin",
                    },
                },
            },
            {
                model: WorkPlace,
                attributes: ["id", "insiderID"],
                where: {
                    isStaff: 1,
                },
            },
        ],
    });
    return res.json(users);
};
