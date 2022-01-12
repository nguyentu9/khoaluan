const Degree = require("../models/degree.model");
const User = require("../models/user.model");
const JobTitle = require("../models/jobTitle.model");
const Major = require("../models/major.model");
const FacDept = require("../models/facdept.model");
const UserRole = require("../models/userRole.model");

// @desc    Lấy thông tin cá nhân của người dùng hiện tại
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
exports.blockUserAccount = async (req, res, next) => {
    // const { userID } = req.body;
};
