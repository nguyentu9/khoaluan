const router = require("express").Router();
const { login, logout, signup } = require("../controllers/auth.controller");

router.post("/login", login);
router.post("/logout", logout);
router.post("/signup", signup);

module.exports = router;
