const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/similarListings', {
  dbName: 'similarListings',
  useNewUrlParser: true,
   useUnifiedTopology: true
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
const Photo = mongoose.model('Photo', similarListings);

const findAllPhotos = (cb) => {
  console.log('db seeded, great success!');
  Photo.find((err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(null, data);
    }
  });
};

const saveAllPhotos = (imageObj) => {
  const newDocument = new Photo({
    Id: imageObj.Id,
    New: imageObj.New,
    Address: imageObj.Address,
    Favorite: imageObj.Favorite,
    Price: imageObj.Price,
    Bed: imageObj.Bed,
    Bath: imageObj.Bath,
    Sqft: imageObj.Sqft,
  });

  newDocument.save((err) => {
    if (err) {
      console.log('failed to save');
    } else {
      console.log('successfully saved');
    }
  });
};