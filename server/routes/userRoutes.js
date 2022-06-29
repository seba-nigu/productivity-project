const router = require("express").Router();
const {
  loginUser,
  registerUser,
  getUserData,
} = require("../controllers/userController");
const { protect } = require("../middlewares/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getUserData);

module.exports = router;
