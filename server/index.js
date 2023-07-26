require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const router = require('./routers');
const telegram = require('./telegram');

const port = process.env.PORT || 3001;
const URL = process.env.DATABASE_URL;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);
app.use(telegram);

const start = async () => {
  try {
    await mongoose.connect(URL);

    app.listen(port, () => {
      app.use(morgan('dev'));

      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
