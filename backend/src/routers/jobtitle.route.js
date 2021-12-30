const router = require("express").Router();
const {
    getJobTitles,
    getJobTitleById,
} = require("../controllers/jobtitle.controller");

router.get("/", getJobTitles);
router.get("/:id", getJobTitleById);

module.exports = router;
