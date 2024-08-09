const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const productMiddleware = require("../middlewares/general/generalMiddleware");
const {
  categoryValidationID,
  categoryValidationAll,
  categoryValidationSome
} = require("../validation/categoryValidation");
const { checkSchema } = require("express-validator");

router.get("/", categoryController.getAllCategories);

router.get(
  "/:id",
  checkSchema(categoryValidationID),
  productMiddleware,
  categoryController.getCategoryById
);

router.post(
  "/",
  checkSchema(categoryValidationAll),
  productMiddleware,
  categoryController.createCategory
);

router.put(
  "/:id",
  checkSchema(categoryValidationSome),
  productMiddleware,
  categoryController.updateCategory
);

router.delete(
  "/:id",
  checkSchema(categoryValidationID),
  productMiddleware,
  categoryController.deleteCategory
);

module.exports = router;