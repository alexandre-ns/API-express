const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const generalMiddleware = require('../middlewares/general/generalMiddleware');
const {
  cartValidationID,
  cartValidationAll,
  cartValidationSome
} = require('../validation/cartValidation');
const { checkSchema } = require('express-validator');

router.get('/', cartController.getAllCarts);

router.get(
  '/:id',
  checkSchema(cartValidationID),
  generalMiddleware,
  cartController.getCartById
);

router.post(
  '/',
  checkSchema(cartValidationAll),
  generalMiddleware,
  cartController.createCart
);

router.put(
  '/:id',
  checkSchema(cartValidationSome),
  generalMiddleware,
  cartController.updateCart
);

router.delete(
  '/:id',
  checkSchema(cartValidationID),
  generalMiddleware,
  cartController.deleteCart
);

module.exports = router;
