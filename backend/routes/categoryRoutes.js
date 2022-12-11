const express = require("express");
const router = express();
const {
  getCategories,
  newCategory,
  deleteCategory,
  saveAttr,
} = require("../controllers/categoryController");

const {
  verifyIsAdmin,
  verifyIsLoggedIn,
} = require("../middleware/verifyTokenAuth");

router.get("/", getCategories);

router.use(verifyIsLoggedIn);
router.use(verifyIsAdmin);
router.post("/", newCategory);
router.delete("/:category", deleteCategory);
router.post("/attr", saveAttr);
module.exports = router;
