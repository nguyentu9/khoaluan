const createError = require("http-errors");
const FacDept = require("../models/facdept.model");

// @desc    Lấy phòng-khoa theo ID
// @route   GET /api/facdepts/:id
// @access  Public
exports.getFacdeptByID = async (req, res, next) => {
    const id = req.params.id;
    const facDept = await FacDept.findByPk(id);
    if (!facDept)
        return next(
            createError.NotFound(`Không tìm thấy phòng-khoa với ID: ${id}`)
        );
    res.json(facDept);
};

// @desc    Lấy tất cả phòng-khoa
// @route   GET /api/facdepts
// @access  Public
exports.getFacdepts = async (req, res, next) => {
    let { type } = req.query;

    if (["faculty", "department"].includes(type)) type = { type };
    else type = {};

    const facDept = await FacDept.findAll({
        where: type,
    });
    res.json(facDept);
};
