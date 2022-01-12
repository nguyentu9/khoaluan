const createError = require("http-errors");
const JobTitle = require("../models/jobTitle.model");

// @desc    Lấy chức vụ theo ID
// @route   GET /api/jobtitles/:id
// @access  Public
exports.getJobTitleById = async (req, res, next) => {
    const id = req.params.id;
    const jobTitle = await JobTitle.findByPk(id);
    if (!jobTitle)
        return next(
            createError.NotFound(`Không tìm thấy chức vụ với ID: ${id}`)
        );
    res.json(jobTitle);
};

// @desc    Lấy tất cả chức vụ
// @route   GET /api/jobtitles
// @access  Public
exports.getJobTitles = async (req, res, next) => {
    const jobTitles = await JobTitle.findAll();
    res.json(jobTitles);
};
