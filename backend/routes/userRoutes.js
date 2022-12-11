const express = require("express");
const router = express();
const {
  getUsers,
  registerUser,
  loginUser,
} = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);
//admin routes
router.get("/", getUsers);

module.exports = router;
