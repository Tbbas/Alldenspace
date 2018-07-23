/**
 * app.js
 */
import path from 'path';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser'
import logger from 'morgan';
import express from 'express';
import routes from './routes/index';

// use dotenv
dotenv.config({
  silent: true,
});



// Express app setup
const app = express();

// logger
app.use(logger('combined'));

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// cookie parser
app.use(cookieParser());

// Views
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

// Public files
app.use(express.static(path.join(__dirname, './public')));


app.use('/', routes);

// 404s
app.use((req, res, next) => {
  const err = new Error('This is not the page you are looking for...');
  err.status = 400;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: app.get('env') === 'development' ? err : {},
  });
  next();
});

export default app;
