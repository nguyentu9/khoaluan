const TopicRole = require("../models/topicRole.model");
const createError = require("http-errors");

// @desc    Lấy tất cả vai trò đề tài
// @route   GET /api/topicroles/:id
// @access  Public
exports.getTopicRoles = async (req, res, next) => {
    const topicRoles = await TopicRole.findAll();
    return res.json(topicRoles);
};

// @desc    Lấy vai trò đề tài theo ID
// @route   GET /api/topicroles/:id
// @access  Public
exports.getTopicRoleByID = async (req, res, next) => {
    const id = req.params.id;
    const topicRole = await TopicRole.findByPk(id);
    if (!topicRole)
        return next(
            createError.NotFound(`Không tìm thấy vai trò với ID: ${id}`)
        );
    return res.json(topicRole);
};
