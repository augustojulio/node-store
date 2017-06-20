const express = require('express');
const app = express();
const chalk = require('chalk');

const Product = require('./model/DbConfig.js').Product;
const dbHelper = require('./model/DbHelper.js');


const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  Product.find(function(err, products) {
      if (err) return console.error(err);
      res.json(products);
  });
});

app.post('/', (req, res) => {
    let newproduct = req.body;
    let product = new Product(newproduct);
    product.picture = "http://placehold.it/350x240";
    dbHelper.saveToDB(product);

    res.status(200).json(product);
});

app.get('/:productcode', (req, res) => {
    var productcode = req.params.productcode;
    Product.findOne({
        productcode: productcode
    }, function(err, product) {
        res.json(product);
    });
});

const server = app.listen(port, () => {
  console.log('%s App is running at http://localhost:%d', chalk.green('✓'), port); 
});

module.exports = server;
