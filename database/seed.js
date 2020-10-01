const faker = require('faker');
const db = require('./index.js');

// in progress: images populated from AWS hosting rather than faker seeded images.
const similarListings = [];

const generateImageUrls = () => {
  // generate a random number of image urls for each listing
  const numPhotosPerListing = faker.random.number({ min: 4, max: 55 });
  const randomImgUrls = [];
  const randomAddress = [];

  for (let i = 0; i < numPhotosPerListing; i += 1) {
    const randomId = faker.random.number({ min: 1, max: 55 });
    const randomImgUrl = `enter aws link`;
    const randomAddress = faker.address.streetAddress();


    if (!randomImgUrls.includes(randomImgUrl)) {
      randomImgUrls.push(randomImgUrl);
      ;
    } else {
      i -= 1;
    }
  }
  return [randomImgUrls];
};

// console.log(generateImageUrls());

const generatesimilarListings = () => {
  const usedListingIds = [];
  const randomAddress = [];
  while (similarListings.length < 100) {
    const generateListingId = faker.random.number({ min: 100000, max: 999999 });
    const generatePrice = faker.random.number({min:250000, max: 12000000});
    const generateBed = faker.random.number({min: 1, max: 14})
    const generateBath = faker.random.number({ min: 1, max: 10 })
    const generateSqft = faker.random.number({min: 100, max: 999999})
    const addressAndImages = generateImageUrls();
    const alladdress = addressAndImages[0];
    const allImageUrls = addressAndImages[1];

    if (!usedListingIds.includes(generateListingId)) {
      usedListingIds.push(generateListingId);

      similarListings.push({
        listingId: generateListingId,
        imageUrls: allImageUrls,
        address: alladdress,
        New: Math.random() >= 0.5,
        Favorite: Math.random() >= 0.5,
        Price: generatePrice();
        Bed: generateBed();
        Bath: generateBath();
        Sqft: generateSqft();
      });
    }
  }
};

generatesimilarListings();


const seedDatabase = () => {
  for (let i = 0; i < similarListings.length; i += 1) {
    db.saveAllPhotos(similarListings[i]);
  }
};

seedDatabase();

