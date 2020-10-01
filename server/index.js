const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const db = require('../database/index.js');
const app = express();
const port = process.env.PORT || 3003;

const distDir = path.join(__dirname, '../client/dist');
const publicDir = path.join(__dirname, '../public');

app.use(cors());
app.use(express.static(publicDir));
app.use(bodyParser.json());
app.listen(port, () => console.log(`Listening on port ${port}...`));

app.get('/photoGallery', (req, res) => {
  db.findAllPhotos((err, data) => {
    if (err) {
      res.status(500);
      res.end();
    } else {
      res.status(200);
      res.send(data);
    }
  });
});