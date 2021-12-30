const {
    getDegrees,
    getDegreeById,
} = require("../controllers/degree.controller");

const router = require("express").Router();

router.get("/", getDegrees);
router.get("/:id", getDegreeById);

module.exports = router;
