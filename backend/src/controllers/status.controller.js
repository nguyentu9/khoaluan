const createError = require("http-errors");
const Status = require("../models/status.model");

// @desc    Lấy tất cả trạng thái đề tài
// @route   GET /api/statuses
// @access  Public
exports.getStatus = async (req, res, next) => {
    const statuses = await Status.findAll();
    return res.json(statuses);
};

// @desc    Lấy trạng thái đề tài theo ID
// @route   GET /api/statuses/:id
// @access  Public
exports.getStatusByID = async (req, res, next) => {
    const id = req.params.id;
    const status = await Status.findByPk(req.params.id);
    if (!status)
        return next(
            createError.NotFound(`Không tìm thấy trạng thái với ID: ${id}`)
        );
    return res.json(status);
};
