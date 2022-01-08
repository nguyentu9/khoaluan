const Degree = require("../models/degree.model");

// @desc    Lấy học hàm học vị theo ID
// @route   GET /api/degrees/:id
// @access  Public
exports.getDegreeById = async (req, res, next) => {
    const id = req.params.id;
    const degree = await Degree.findByPk(id);
    if (!degree)
        return res.status(404).json(`Không tìm thấy học hàm với ID: ${id}`);
    res.json(degree);
};

// @desc    Lấy tất cả học hàm học vị
// @route   GET /api/degrees
// @access  Public
exports.getDegrees = async (req, res, next) => {
    const degrees = await Degree.findAll();
    res.json(degrees);
};
