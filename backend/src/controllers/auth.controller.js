const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const crypto = require("crypto");
const fs = require("fs");
const sequelize = require("../config/db");
const createError = require("http-errors");
const validateUser = require("../validation/validateUser");
const FacDept = require("../models/facdept.model");

// @desc    Đăng nhập
// @route   POST /api/auth/login
// @access  Public
exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password)
        return next(createError.NotFound("Email và mật khẩu không được trống"));
    const user = await User.findOne({ where: { email } });
    if (!user) {
        return next(createError.NotFound("Email hoặc mật khẩu không đúng"));
    }

    if (await bcrypt.compare(password, user.password)) {
        const { id, fullName, email, roleID, avatarUrl } = user;

        req.session.user = user;
        return res.json({
            message: "Đăng nhập thành công",
            data: {
                id,
                fullName,
                email,
                avatarUrl,
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
    console.log(req.session);
    req.session.destroy();
    res.json({
        message: "Đăng xuất thành công !",
    });
};

exports.isUserValid = async (req, res, next) => {
    const body = {};
    for (const [key, value] of Object.entries(req.body)) {
        body[key] = Array.isArray(value) ? value[0] : value;
    }
    const { errors, user } = await validateUser(body);

    if (errors || user?.isInsider) {
        fs.unlink(req.file.path, (err) => {
            if (err) {
                res.status(500).send("Error");
                return;
            }
            req.file = null;
            req.data = { errors, user };
        });
    }
    if (errors) {
        res.status(400).json({
            message: "Thông tin không hợp lệ",
            errors,
        });
        return;
    }

    if (!user?.isInsider && !errors) {
        // File checksum
        let file_buffer = fs.readFileSync(req.file.path);
        let sum = crypto.createHash("md5");
        sum.update(file_buffer);
        user.hash = sum.digest("hex");
        req.data = { errors, user };
    }

    req.data = { user, errors };
    next();
    return;
};

// @desc    Đăng ký
// @route   POST /api/auth/register
// @access  Public
exports.signup = async (req, res, next) => {
    const { user } = req.data;
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

    if (user.haveABankNum)
        newUser.set({
            bankNumber: user.bankNumber,
            bankBranch: user.bankBranch,
        });
    if (!user.isInsider) {
        newUser.set({
            hash: user.hash,
            nationalIDImg: user.nationalIDImg,
            workplaceOutside: user.workplace,
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
        const savedUser = await newUser.save();
        const fetchedFacdept = await FacDept.findByPk(user.workplace);
        if (user.isInsider) {
            await savedUser.addFacdept(fetchedFacdept);
        }

        res.status(201).json({
            message: "Đăng ký thành công!",
        });
        return;
    } catch (err) {
        const errArr = err?.errors?.map((e) => ({
            message: e.message,
            key: e.path,
        }));
        res.status(400).json(errArr);
        return;
    }
};
