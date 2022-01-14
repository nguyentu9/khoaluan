const router = require("express").Router();
const {
    login,
    logout,
    signup,
    isUserValid,
    validateSteps,
} = require("../controllers/auth.controller");

router.post("/login", login);
router.post("/logout", logout);
router.post("/signup", isUserValid, signup);
router.post("/step/:id", validateSteps);

module.exports = router;
