const express = require('express');
const router = express.Router();
const productController = require("../controllers/productController");
const productValidation = require("../validation/validationProduct");
const validateProduct = require("../middlewares/validator/validatorProduct");


router.get("/", productController.getAllProducts);
router.get(
  "/:id",
  productValidation,
  validateProduct,
  productController.getProductById
);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;