const Joi = require("joi");
const messagesVN = require("../constant/validationMsg");

exports.validateRegisterTopic = async (topic) => {
    const schema = Joi.object()
        .keys({
            name: Joi.string()
                .label("Tên đề tài")
                .trim()
                .min(10)
                .max(150)
                .required()
                .messages(messagesVN),
            duration: Joi.number()
                .label("Thời gian thực hiện")
                .min(3)
                .max(18)
                .required()
                .messages(messagesVN),
            totalExpense: Joi.number().label("Kinh phí thực hiện").required(),
            majorID: Joi.string()
                .label("Lĩnh vực đề tài")
                .trim()
                .max(36)
                .guid()
                .required()
                .messages(messagesVN),
            instructor: Joi.string()
                .label("Người hướng dẫn")
                .trim()
                .max(36)
                .guid()
                .required()
                .messages(messagesVN),
            members: Joi.array()
                .label("Thành viên đề tài")
                .max(4)
                .items(
                    Joi.object({
                        userID: Joi.string()
                            .label("ID thành viên")
                            .trim()
                            .max(36)
                            .guid()
                            .required()
                            .messages(messagesVN),
                        topicRole: Joi.string()
                            .label("Vai trò đề tài")
                            .valid(
                                "dongchunhiem",
                                "thanhvienthuchienchinh",
                                "thanhvien"
                            )
                            .required()
                            .messages(messagesVN),
                    })
                )
                .unique(comparator)
                .messages(messagesVN),
        })
        .unknown(true);

    function comparator(a, b) {
        return a.userID === b.userID;
    }

    try {
        const topicValid = await schema.validateAsync(topic, {
            abortEarly: true,
        });
        return { errors: null, topic: topicValid };
    } catch (err) {
        let errorArr = err.details.map((e) => ({
            key: e.context.key,
            message: e.message,
        }));
        return {
            errors: errorArr,
        };
    }
};
