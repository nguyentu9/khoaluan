const {
    getMyTopics,
    getMyTopicByID,
    regiterTopic,
} = require("../controllers/topic.controller");
const { isUserExsist } = require("../middlewares/user.mdw");
const router = require("express").Router();

router.post(
    "/",
    // isUserExsist,
    regiterTopic
);
router.get("/me", isUserExsist, getMyTopics);
router.get("/:id/me", isUserExsist, getMyTopicByID);

module.exports = router;
