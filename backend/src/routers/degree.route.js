const router = require("express").Router();
const {
    getDegrees,
    getDegreeById,
} = require("../controllers/degree.controller");

router.get("/", getDegrees);
router.get("/:id", getDegreeById);

module.exports = router;
