const router = require("express").Router();
const { getMyProfile } = require("../controllers/user.controller");
const { isUserExsist, checkUserRole } = require("../middlewares/user.mdw");

router.get("/", isUserExsist, checkUserRole);
router.get("/me/profile", isUserExsist, getMyProfile);
router.get("/:id");

module.exports = router;
