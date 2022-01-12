const createError = require("http-errors");
const User = require("../models/user.model");

exports.isUserExsist = async (req, res, next) => {
    if (!req.session.user) {
        return next(
            createError.BadRequest(
                "Người dùng không hợp lệ. Vui lòng đăng nhập lại!"
            )
        );
    }
    const user = await User.findByPk(req.session.user.id, {
        attributes: ["id", "roleID"],
    });
    req.user = user;
    next();
    return;
};

exports.checkUserRole = async (req, res, next) => {
    // const user = await User.findByPk(req.session.user.id);
    // const user = await User.findByPk("3947d580-8ef2-4918-a0e0-4b9fb038bebf");
    // const userRole = await user.getUserrole();
    // const permission = await userRole.getPermissions();
    // res.json(permission);
};
