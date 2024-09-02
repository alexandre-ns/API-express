var express = require('express');
var router = express.Router();

const routesProducts = require('./products');
const routesUser = require('./users');
const routesCategory = require('./category');
const routesOrder = require('./order');
const routesCart = require('./cart');
const routesAuth = require('./auth');

router.use('/products', routesProducts);
router.use('/users', routesUser);
router.use('/category', routesCategory);
router.use('/order', routesOrder);
router.use('/cart', routesCart);
router.use('/auth', routesAuth);

module.exports = router;
