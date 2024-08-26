const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const generalMiddleware = require('../middlewares/validation/validationMiddleware');
const {
  productValidationID,
  productValidationAll,
  productValidationSome
} = require('../validation/productValidation');
const { checkSchema } = require('express-validator');

router.get('/', productController.getAllProducts);

router.get(
  '/:id',
  checkSchema(productValidationID),
  generalMiddleware,
  productController.getProductById
);

router.post(
  '/',
  checkSchema(productValidationAll),
  generalMiddleware,
  productController.createProduct
);

router.put(
  '/:id',
  checkSchema(productValidationSome),
  generalMiddleware,
  productController.updateProduct
);

router.delete(
  '/:id',
  checkSchema(productValidationID),
  generalMiddleware,
  productController.deleteProduct
);

module.exports = router;
