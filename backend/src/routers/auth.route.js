const router = require("express").Router();
const {
    login,
    logout,
    signup,
    isUserValid,
    validateSteps,
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
router.post("/step/:id", validateSteps);

module.exports = router;
