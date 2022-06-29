const router = require("express").Router();
const { protect } = require("../middlewares/authMiddleware");

router.get("/", protect);

module.exports = router;
