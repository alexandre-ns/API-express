require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const connectDB = require('./mongoose');
const apiRoutes = require('./src/routes/index');
const orderQueueService = require('./src/services/queueConsumer/orderQueue');

var app = express();
app.use(bodyParser.json());

// connect data base mongoDB
connectDB();

// initialize queue consumer
(async () => {
  await orderQueueService.connectRabbitMQ();
  orderQueueService.startConsumer();
})();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//base routes API
app.use('/api', apiRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
