const express = require('express');

const PORT = 3003;

const bodyParser = require('body-parser');

const path = require('path');

const db = require('../database/index.js');

const app = express();

const distDir = path.join(__dirname, '../client/dist');

const publicDir = path.join(__dirname, '../public');

app.listen(PORT, () => (console.log(`listening on PORT: ${PORT}`)));
