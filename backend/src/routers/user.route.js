const router = require("express").Router();
const { getMyProfile, getMembers } = require("../controllers/user.controller");
const { isUserExsist, checkUserRole } = require("../middlewares/user.mdw");

router.get("/", isUserExsist, checkUserRole);
router.get("/me/profile", isUserExsist, getMyProfile);
router.get("/members", isUserExsist, getMembers);
// router.get("/:id");

module.exports = router;
