const createError = require("http-errors");
const sequelize = require("../config/db");
const Status = require("../models/status.model");
const Topic = require("../models/topic.model");
const TopicMember = require("../models/topicMember.model");
const TopicRole = require("../models/topicRole.model");
const User = require("../models/user.model");

// @desc    Lấy danh sách đề tài cá nhân
// @route   GET /api/topics/me
// @access  Private/TopicOwner
exports.getMyTopics = async (req, res, next) => {
    const userID = req.user.id;
    // const userID = "3947d580-8ef2-4918-a0e0-4b9fb038bebf";
    let { page, size } = req.query;

    const minSize = 5;
    const maxSize = 20;
    if (page === undefined || Number.isNaN(+page) || +page < 0) page = 1;
    if (size === undefined || Number.isNaN(+size) || +size < 0) size = minSize;
    if (size > maxSize) size = maxSize;

    const topics = await Topic.findAndCountAll({
        attributes: ["id", "name", "registraionDate"],
        include: [
            {
                model: TopicMember,
                attributes: ["id"],
                required: true,
                where: { userID },
                include: [{ model: TopicRole, attributes: ["name"] }],
            },
            {
                model: Status,
                attributes: ["name"],
                required: true,
            },
        ],
        limit: size,
        offset: (page - 1) * size,
    });

    return res.json({ page, size, ...topics });
};

// @desc    Lấy danh sách đề tài cá nhân theo id
// @route   GET /api/topics/:id/me
// @access  Private/TopicOwner
exports.getMyTopicByID = async (req, res, next) => {};
