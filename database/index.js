const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/similarListings', {
  dbName: 'similarListings',
  useNewUrlParser: true,
});

const similarListings = mongoose.Schema({
  Id: Number,
  Address: String,
  New: Boolean,
  Favorite: Boolean,
  Price: Number,
  Bed: Number,
  Bath: Number,
  Sqft: Number,

});

const newListings = mongoose.Schema({
  Id: Number,
  New: Boolean,
  Address: String,
  Favorite: Boolean,
  Price: Number,
  Bed: Number,
  Bath: Number,
  Sqft: Number,

});
