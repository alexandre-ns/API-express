var express = require('express');
var router = express.Router();

const routesProducts = require('./products');
const routesUser = require('./users');
const routesCategory = require('./category');
const routesOrder = require('./order');
const routesCart = require('./cart');

router.use('/products', routesProducts);
router.use('/users', routesUser);
router.use('/category', routesCategory);
router.use('/order', routesOrder);
router.use('/cart', routesCart);

// GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

});

module.exports = router;
