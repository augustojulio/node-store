const dbName = 'node_store';
const dbUri = 'localhost/' + dbName;

const mongoose = require('mongoose');
mongoose.connect(dbUri);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function(callback) {
    console.log('Connected to ' + dbName);
});

var productSchema = mongoose.Schema({
  productname: String,
  description: String,
  price: String,
  picture: String
});

exports.Product = mongoose.model('Product', productSchema);
