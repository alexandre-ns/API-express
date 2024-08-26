const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const generalMiddleware = require('../middlewares/validation/validationMiddleware');
const {
  orderValidationID,
  orderValidationAll,
  orderValidationSome
} = require('../validation/orderValidation');
const { checkSchema } = require('express-validator');

router.get('/', orderController.getAllOrders);

router.get(
  '/:id',
  checkSchema(orderValidationID),
  generalMiddleware,
  orderController.getOrderById
);

router.post(
  '/',
  checkSchema(orderValidationAll),
  generalMiddleware,
  orderController.createOrder
);

router.put(
  '/:id',
  checkSchema(orderValidationSome),
  generalMiddleware,
  orderController.updateOrder
);

router.delete(
  '/:id',
  checkSchema(orderValidationID),
  generalMiddleware,
  orderController.deleteOrder
);

module.exports = router;
