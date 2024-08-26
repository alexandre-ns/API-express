const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const generalMiddleware = require('../middlewares/validation/validationMiddleware');
const {
  categoryValidationID,
  categoryValidationAll,
  categoryValidationSome
} = require('../validation/categoryValidation');
const { checkSchema } = require('express-validator');

router.get('/', categoryController.getAllCategories);

router.get(
  '/:id',
  checkSchema(categoryValidationID),
  generalMiddleware,
  categoryController.getCategoryById
);

router.post(
  '/',
  checkSchema(categoryValidationAll),
  generalMiddleware,
  categoryController.createCategory
);

router.put(
  '/:id',
  checkSchema(categoryValidationSome),
  generalMiddleware,
  categoryController.updateCategory
);

router.delete(
  '/:id',
  checkSchema(categoryValidationID),
  generalMiddleware,
  categoryController.deleteCategory
);

module.exports = router;
