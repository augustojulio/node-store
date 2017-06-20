let mongoose = require('mongoose'),
  Product = mongoose.model('Product');

exports.listAll = (req, res) => {
  Product.find({}, (err, product) => {
    if (err)
      res.send(err);
    res.json(product);
  });
};


exports.create = (req, res) => {
  var newProduct = new Product(req.body);
  newProduct.save((err, product) => {
    if (err)
      res.send(err);
    res.json(product);
  });
};


exports.getProductById = (req, res) => {
  Product.findById(req.params.productId,
    (err, product) => {
      if (err)
        res.send(err);
      res.json(product);
    });
};


exports.updateProduct = (req, res) => {
  Product.findOneAndUpdate(req.params.productId, req.body, {
    new: true
  }, (err, product) => {
    if (err)
      res.send(err);
    res.json(product);
  });
};


exports.deleteProduct = (req, res) => {
  Product.remove({
    _id: req.params.productId
  }, (err, product) => {
    if (err)
      res.send(err);
    res.json({
      message: 'Product was successfully deleted'
    });
  });
};
