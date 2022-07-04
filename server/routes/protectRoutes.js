const router = require("express").Router();
const { protect } = require("../middlewares/authMiddleware");
const { getTasks } = require("../controllers/taskController");

router.get("/", protect);
router.post("/jira", getTasks);

module.exports = router;
