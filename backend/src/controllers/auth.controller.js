const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const createError = require("http-errors");

// @desc    Đăng nhập
// @route   POST /api/auth/login
// @access  Public
exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
        return next(createError.NotFound("Email hoặc mật khẩu không đúng"));
    }

    if (await bcrypt.compare(password, user.password)) {
        const { id, fullName, email, roleID } = user;
        return res.json({
            message: "Đăng nhập thành công",
            data: {
                id,
                fullName,
                email,
                roleID,
            },
        });
    } else {
        return next(createError.NotFound("Email hoặc mật khẩu không đúng"));
    }
};

// @desc    Đăng xuất
// @route   POST /api/auth/logout
// @access  Public
exports.logout = async (req, res, next) => {
    // req.ression.destroy();
    res.json({
        message: "Đăng xuất thành công !",
    });
};

// @desc    Đăng ký
// @route   POST /api/auth/register
// @access  Public
exports.signup = async (req, res, next) => {};
