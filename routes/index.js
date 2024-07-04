var express = require('express');
var router = express.Router();
const routesProducts = require('./products');


router.use('/products', routesProducts);

// GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

});

module.exports = router;
