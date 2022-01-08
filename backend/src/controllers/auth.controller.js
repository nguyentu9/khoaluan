// @desc    Đăng nhập
// @route   POST /api/auth/login
// @access  Public
exports.login = async (req, res, next) => {};

// @desc    Đăng xuất
// @route   POST /api/auth/logout
// @access  Public
exports.logout = async (req, res, next) => {
    req.ression.destroy();
    res.json({
        message: "Đăng xuất thành công !",
    });
};

// @desc    Đăng ký
// @route   POST /api/auth/register
// @access  Public
exports.signup = async (req, res, next) => {};
