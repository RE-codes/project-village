const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = process.env.MONGO_URI;

mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Error connecting to MongoDB: ', err));

app.use('/api/users', require('./routes/users'));
app.use('/api/posts', require('./routes/posts'));
// app.use('/api/profiles', require('./routes/profiles'));

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening on port ${port}...`));
