const {
    getFacdepts,
    getFacdeptByID,
} = require("../controllers/facdept.controller");

const router = require("express").Router();

router.get("/", getFacdepts);
router.get("/:id", getFacdeptByID);

module.exports = router;
