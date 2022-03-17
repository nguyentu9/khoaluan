const createError = require("http-errors");
const sequelize = require("../config/db");
const Topic = require("../models/topic.model");
const TopicMember = require("../models/topicMember.model");
const User = require("../models/user.model");
const { validateRegisterTopic } = require("../validation/validateTopic");
const { topicStatus } = require("../constant");
const TopicStatus = require("../models/topicStatus.model");

// @desc    Lấy danh sách đề tài cá nhân
// @route   GET /api/topics/me
// @access  Private/TopicOwner
exports.getMyTopics = async (req, res, next) => {
    const userID = req.user.id;
    let { page, size } = req.query;

    const minSize = 5;
    const maxSize = 20;
    if (page === undefined || Number.isNaN(+page) || +page < 0) page = 1;
    if (size === undefined || Number.isNaN(+size) || +size < 0) size = minSize;
    if (size > maxSize) size = maxSize;

    const topics = await Topic.findAndCountAll({
        attributes: ["id", "name", "registrationDate"],
        include: [
            {
                model: TopicMember,
                attributes: ["id", "topicRole"],
                required: true,
                where: { userID },
            },
            // {
            //     model: Status,
            //     attributes: ["name"],
            //     required: true,
            //     order: [["id", "DESC"]],
            // },
        ],
        order: [["registrationDate", "DESC"]],
        limit: size,
        offset: (page - 1) * size,
    });
    return res.json({ page, size, ...topics });
};

// @desc    Lấy danh sách đề tài cá nhân theo id
// @route   GET /api/topics/:id/me
// @access  Private/TopicOwner
exports.getMyTopicByID = async (req, res, next) => {
    const userID = req.user.id;
    const topicID = req.params.id;

    const topic = await Topic.findOne({
        where: { id: topicID },
        attributes: ["id", "name", "registrationDate"],
        include: [
            {
                model: TopicMember,
                required: true,
                where: { userID },
                include: [{ model: TopicRole, attributes: ["name"] }],
            },
            {
                model: TopicStatus,
                attributes: ["name"],
                required: true,
                order: [["id", "DESC"]],
            },
        ],
        order: [["registrationDate", "DESC"]],
        limit: size,
        offset: (page - 1) * size,
    });
    if (topic) return res.json(topic);
    else return next(createError.BadRequest("Không tìm thấy đề tài"));
};

// @desc    Đăng ký đề tài
// @route   POST /api/topics
// @access  Private/TopicOwner
exports.regiterTopic = async (req, res, next) => {
    const userID = req.user.id;
    const { errors, topic } = await validateRegisterTopic(req.body);
    if (errors) {
        return next(createError.BadRequest(errors));
    }
    const user = await User.findByPk(userID);
    const workplace = await user.getWorkplace();

    const totalExpense = topic.totalExpense;
    if (
        (workplace.isStudent &&
            (totalExpense < 1000000 || totalExpense > 10000000)) ||
        (!workplace.isStudent && ![30000000, 70000000].includes(totalExpense))
    ) {
        return next(createError.BadRequest("Kinh phí không hợp lệ."));
    }

    try {
        const promiseMembers = topic.members.map(({ userID }) =>
            User.findByPk(userID)
        );
        const members = await Promise.all(promiseMembers);
        if (members.includes(null)) {
            return next(createError("Thành viên không hợp lệ"));
        }

        const savedTopic = await Topic.create({
            name: topic.name,
            duration: topic.duration,
            totalExpense: topic.totalExpense,
            majorID: topic.majorID,
            instructor: topic.instructor,
        });

        const status = await TopicStatus.create(topicStatus[0]);
        console.log(status);
        const promiseSavedMembers = [];
        for (let i = 0; i < members.length; i++) {
            promiseSavedMembers.push(
                savedTopic.addUser(members[i], {
                    through: { topicRole: topic.members[i].topicRole },
                })
            );
        }
        promiseSavedMembers.push(
            savedTopic.addUser(user, {
                through: { topicRole: "chunhiem" },
            })
        );

        await Promise.all(promiseSavedMembers);

        return res.status(201).json({ message: "Đăng ký thành công" });
    } catch (err) {
        return next(createError.BadRequest(err?.errors[0]?.message));
    }
};
