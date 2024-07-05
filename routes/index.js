var express = require('express');
var router = express.Router();
const routesProducts = require('./products');
const routesUser = require('./users');

router.use('/products', routesProducts);
router.use('/users', routesUser);

// GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

});

module.exports = router;
