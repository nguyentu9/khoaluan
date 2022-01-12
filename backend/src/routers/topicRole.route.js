const {
    getTopicRoles,
    getTopicRoleByID,
} = require("../controllers/topicRole.controller");

const router = require("express").Router();

router.get("/", getTopicRoles);
router.get("/:id", getTopicRoleByID);

module.exports = router;
