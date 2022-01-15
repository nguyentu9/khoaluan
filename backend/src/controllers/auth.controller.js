const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const sequelize = require("../config/db");
const createError = require("http-errors");
const FacDept = require("../models/facdept.model");
const WorkPlace = require("../models/workplace.model");
// @desc    Đăng nhập
// @route   POST /api/auth/login
// @access  Public
exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return next(
            createError.BadRequest("Email và mật khẩu không được trống")
        );
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
        return next(createError.BadRequest("Email hoặc mật khẩu không đúng"));
    }

    if (await bcrypt.compare(password, user.password)) {
        const { id, fullName, email, isActive, avatarUrl } = user;

        if (!isActive) {
            return next(createError.Forbidden("Tài khoản của bạn đã bị khoá"));
        }

        const role = await user.getUserrole();

        req.session.user = user;
        return res.json({
            message: "Đăng nhập thành công",
            data: {
                id,
                fullName,
                email,
                avatarUrl,
                role,
            },
        });
    } else {
        return next(createError.BadRequest("Email hoặc mật khẩu không đúng"));
    }
};

// @desc    Đăng xuất
// @route   POST /api/auth/logout
// @access  Private
exports.logout = async (req, res, next) => {
    req.session.destroy((err) => {
        res.clearCookie("connect.sid", {
            path: "/",
            secure: false,
            httpOnly: true,
            domain: "localhost:3000",
            // sameSite: true,
        }).json({
            message: "Đăng xuất thành công",
        });
    });
};

exports.isUserValid = async (req, res, next) => {
    // // const { errors, user } = await validateUser(req.body);
    // if (errors) {
    //     res.status(400).json({
    //         message: "Thông tin không hợp lệ",
    //         errors,
    //     });
    //     return;
    // }
    // req.data = { user, errors };
    next();
};

// @desc    Đăng ký
// @route   POST /api/auth/signup
// @access  Public
exports.signup = async (req, res, next) => {
    const user = req.body;
    console.log(user);
    const newUser = await User.build({
        isInsider: user.isInsider,
        email: user.email,
        password: user.password,
        fullName: user.fullName,
        birthday: user.birthday,
        gender: user.gender,
        phone: user.phone,
        address: user.address,
        nationalID: user.nationalID,
        issuedDate: user.issuedDate,
        issuedPlace: user.issuedPlace,
        majorID: user.major,
    });

    if (!user.isInsider) {
        newUser.set({
            workplaceOutside: user.workplaceOutside,
        });
    }
    if (user.isInsider)
        newUser.set({
            isStudent: user.isStudent,
            insiderID: user.insiderID,
        });
    if (!user.isStudent) {
        newUser.set({
            scientificTitle: user.scientificTitle,
            jobTitleID: user.jobTitleID,
        });
    }

    try {
        if (user.isInsider) {
            const isExsist = await WorkPlace.findOne({
                where: {
                    insiderID: user.insiderID,
                },
            });

            if (isExsist) {
                return createError(createError.BadRequest("Mã số đã tồn tại!"));
            }
            const savedUser = await newUser.save();
            const workplace = await savedUser.createWorkplace({
                facdeptID: user.workplace,
                isStudent: user.isStudent,
                isStaff: !user.isStudent,
            });
            console.log("thanh cong");
            // const fetchedFacdept = await WorkPlace.findByPk(user.workplace);
            // await savedUser.addFacdept(fetchedFacdept);
        } else {
            await newUser.save();
        }

        return res.status(201).json({
            message: "Đăng ký thành công!",
        });
    } catch (err) {
        const errArr = err?.errors?.map((e) => ({
            message: e.message,
            key: e.path,
        }));
        console.log(err);
        res.status(400).json(errArr);
        return;
    }
};

// @desc    Kiểm tra cookie session có hợp lệ
// @route   POST /api/auth/validuser
// @access  Public
exports.validuser = async (req, res, next) => {
    if (req.session.user) {
        return res.json({
            message: "Người dùng hợp lệ.",
        });
    } else {
        return next(createError.Forbidden("Người dùng không hợp lệ."));
    }
};

// @desc    Kiểm tra thông tin có khả năng bị trùng từng màng hình đăng ký tài khoản
// @route   POST /api/auth/step/:id
// @access  Public
exports.validateSteps = async (req, res, next) => {
    const step = req.params.id;
    const data = req.body.data;
    switch (step) {
        case "1": {
            let email = data;
            if (!email)
                return next(createError.BadRequest("Thông tin không hợp lệ"));

            let isExsist = await User.findOne({
                attributes: ["id"],
                where: { email },
            });

            if (isExsist)
                return next(createError.BadRequest("Email đã tồn tại"));
            else return res.json({ message: "Thông tin hợp lệ" });
        }
        case "2": {
            let phone = data;
            if (!phone)
                return next(createError.BadRequest("Thông tin không hợp lệ"));

            let isExsist = await User.findOne({
                attributes: ["id"],
                where: { phone },
            });
            if (isExsist)
                return next(createError.BadRequest("Số điện thoại đã tồn tại"));
            else return res.json({ message: "Thông tin hợp lệ" });
        }
        case "3": {
            // TODO: Tìm kiếm mã số bên bảng workplace
            let insiderID = data;
            if (!insiderID)
                return next(createError.BadRequest("Thông tin không hợp lệ"));
            let isExsist = await User.findOne({
                attributes: ["id"],
                where: { insiderID },
            });
            if (isExsist)
                return next(createError.BadRequest("Mã số đã tồn tại"));
            else return res.json({ message: "Thông tin hợp lệ" });
        }
        case "4": {
            let nationalID = data;
            if (!nationalID)
                return next(createError.BadRequest("Thông tin không hợp lệ"));
            let isExsist = await User.findOne({
                attributes: ["id"],
                where: { nationalID },
            });
            if (isExsist)
                return next(createError.BadRequest("CMND/CCCD đã tồn tại"));
            else return res.json({ message: "Thông tin hợp lệ" });
        }
        default: {
            return next(createError.BadRequest("Not Found!."));
        }
    }
};
