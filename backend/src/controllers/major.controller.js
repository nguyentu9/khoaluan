const Major = require("../models/major.model");

// @desc    Lấy chuyên ngành theo ID
// @route   GET /api/majors/:id
// @access  Public
module.exports.getMajorById = async (req, res, next) => {
    const id = req.params.id;
    const major = await Major.findByPk(id);
    if (!major)
        return res
            .status(404)
            .json(`Không tìm thấy chuyên ngành với ID: ${id}`);
    res.json(major);
};

// @desc    Lấy tất cả chuyên ngành
// @route   GET /api/marjos
// @access  Public
module.exports.getMajors = async (req, res, next) => {
    const majors = await Major.findAll();
    res.json(majors);
};
