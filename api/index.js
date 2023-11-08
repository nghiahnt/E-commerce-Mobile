const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const port = 8000 || process.env.PORT;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

mongoose
  .connect(
    "mongodb+srv://trongnghia:root@cluster0.byi93hs.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to Mongoose");
  })
  .catch((err) => {
    console.log(err);
  })
