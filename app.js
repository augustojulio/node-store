const express = require('express'),
  app = express(),
  chalk = require('chalk'),
  mongoose = require('mongoose'),
  Product = require('./api/model/ProductModel'),
  bodyParser = require('body-parser');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/node_store');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

const routes = require('./api/routes/Routes');
routes(app);


const port = process.env.PORT || 3000,
  server = app.listen(port, () => {
    console.log('%s App is running at http://localhost:%d', chalk.green('✓'), port); 
  });

module.exports = server;
