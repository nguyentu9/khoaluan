const router = require("express").Router();
const { getMajors, getMajorById } = require("../controllers/major.controller");

router.get("/", getMajors);
router.get("/:id", getMajorById);

module.exports = router;
