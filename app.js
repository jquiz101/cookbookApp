var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// this is where we include mongoose for help connecting to mongodb
const mongoose = require('mongoose')

// this code is going to try and connect to your local mongodb
mongoose.connect('mongodb://127.0.0.1:27017/cookbookApp', { useNewUrlParser: true })
  .then(() => {
    console.log(`Successfully Connected to MongoDB`)
  }).catch(() => {
    console.log(`Error Connecting to the MongoDB`)
  })

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// adding in our recipe routes
const recipeRouter = require('./routes/recipe.routes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// telling the application to use the routers for the /api/recipes prefix
app.use('/api/recipe', recipeRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
