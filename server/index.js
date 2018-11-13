const express = require("express");
const passport = require("passport");
const session = require("express-session");
const body = require("body-parser");
const env = require("dotenv").load();
const router = require("./router");
const path = require("path");
const cors = require("cors");
const PORT = 3000;
const models = require("../models/index.js");
const sequelize = require("sequelize");

const app = express();

app.use(cors());
app.use(body.urlencoded({ extended: true }));
app.use(body.json());

//passport
app.use(
  session({ secret: "secret password", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.resolve(__dirname, "../dist")));
app.use("/api", router);

models.sequelize
  .sync()
  .then(function() {
    console.log("Nice! Database looks fine");
  })
  .catch(function(err) {
    console.log(err, "Something went wrong with the database update!");
  });

app.listen(PORT, () => {
  console.log(`successfully connected to port ${PORT}`);
});

module.exports = app;
