const express = require('express');
const app = express();

const chalk = require('chalk');
const mongoose = require('mongoose');

const Product = require('./api/model/ProductModel');
const bodyParser = require('body-parser');


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
