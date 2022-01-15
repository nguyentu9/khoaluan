const Degree = require("../models/degree.model");
const User = require("../models/user.model");
const JobTitle = require("../models/jobTitle.model");
const Major = require("../models/major.model");
const FacDept = require("../models/facdept.model");
const UserRole = require("../models/userRole.model");
const createError = require("http-errors");
const { Op } = require("sequelize/dist");

// @desc    Lấy thông tin cá nhân
// @route   GET /api/users/me/profile
// @access  Private
exports.getMyProfile = async (req, res, next) => {
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
                include: [{ model: FacDept }],
            },
            { model: UserRole, attributes: ["name"] },
        ],
    });

    return res.json(user);
};

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
