const router = require("express").Router();
const { protect } = require("../middlewares/authMiddleware");
const {
  getTasks,
  editTasks,
  postTask,
} = require("../controllers/taskController");

router.get("/", protect);
router.post("/jira", getTasks);
router.post("/jira/post", postTask);
router.put("/jira", editTasks);

module.exports = router;
