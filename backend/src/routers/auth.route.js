const router = require("express").Router();
const {
    login,
    logout,
    signup,
    isUserValid,
} = require("../controllers/auth.controller");
const { uploadIDCard } = require("../utils/upload");

router.post("/login", login);
router.post("/logout", logout);
router.post(
    "/signup",
    uploadIDCard.single("nationalIDImg"),
    isUserValid,
    signup
);

module.exports = router;
