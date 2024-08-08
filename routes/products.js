const express = require('express');
const router = express.Router();
const productController = require("../controllers/productController");
const productMiddleware = require("../middlewares/validatorCommon/productMiddlare");
const {
  productValidationID,
  productValidationAll,
  productValidationSome
} = require("../validation/productValidation");
const {checkSchema} = require("express-validator");


router.get("/", productController.getAllProducts);

router.get(
  "/:id",
  checkSchema(productValidationID),
  productMiddleware,
  productController.getProductById
);

router.post(
  "/",
  checkSchema(productValidationAll),
  productMiddleware,
  productController.createProduct
);

router.put(
  "/:id", 
  checkSchema(productValidationSome),
  productMiddleware,
  productController.updateProduct);

router.delete(
  "/:id",
  checkSchema(productValidationID),
  productMiddleware,
  productController.deleteProduct
);

module.exports = router;