const router = require("express").Router();
const { protect } = require("../middlewares/authMiddleware");
const { getTasks, editTasks } = require("../controllers/taskController");

router.get("/", protect);
router.post("/jira", getTasks);
router.put("/jira", editTasks);

module.exports = router;
