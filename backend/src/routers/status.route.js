const router = require("express").Router();
const {
    getStatus,
    getStatusByID,
} = require("../controllers/status.controller");

router.get("/", getStatus);
router.get("/:id", getStatusByID);

module.exports = router;
