const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productSchema = new Schema({
  productname: {
    type: String,
    Required: 'fill with a name to your product'
  },
  description: {
    type: String
  },
  price: {
    type: String,
    Required: 'enter with a price to your product'
  },
  picture: {
    type: String
  }
});

module.exports = mongoose.model('Product', productSchema);
