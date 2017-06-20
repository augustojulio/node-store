module.exports = (app) => {
  let product = require('../controller/Controller');

  app.route('/')
    .get(product.listAll)
    .post(product.create);


  app.route('/:productId')
    .get(product.getProductById)
    .put(product.updateProduct)
    .delete(product.deleteProduct);
};
