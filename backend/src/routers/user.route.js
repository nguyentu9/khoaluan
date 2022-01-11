const router = require("express").Router();
const { getMyProfile } = require("../controllers/user.controller");

router.get("/me/profile", getMyProfile);
router.get("/:id");

module.exports = router;
