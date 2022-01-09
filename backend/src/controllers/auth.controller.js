const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const crypto = require("crypto");
const fs = require("fs");
const createError = require("http-errors");
const validateUser = require("../validation/validateUser");

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

exports.isUserValid = async (req, res, next) => {
    const body = {};
    for (const [key, value] of Object.entries(req.body)) {
        body[key] = Array.isArray(value) ? value[0] : value;
    }
    const { errors, user } = await validateUser(body);

    if (user?.isInsider || errors) {
        fs.unlink(req.file.path, (err) => {
            if (err) return res.status(500).send("Something wrong.");
            req.file = null;
            req.user = user;
            next();
        });
    } else if (!user?.isInsider && !errors) {
        // File checksum
        let file_buffer = fs.readFileSync(req.file.path);
        let sum = crypto.createHash("md5");
        sum.update(file_buffer);
        // Assign to user
        user.hash = sum.digest("hex");

        req.user = user;
        next();
    }
};

// @desc    Đăng ký
// @route   POST /api/auth/register
// @access  Public
exports.signup = async (req, res, next) => {
    const user = req.user;

    // // TODO: Kiểm tra insider == true : Thêm user vào workplace
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
        newUser.set({ isStudent: user.isStudent, insiderID: user.insiderID });

    const savedUser = await newUser.save();
    res.status(201).json({
        message: "Đăng ký thành công!",
        data: user,
        file: req.file,
    });
};
