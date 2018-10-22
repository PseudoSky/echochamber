const pg = require("pg");
const Sequelize = require("sequelize");

const connection = new Sequelize("gyfanbase", "katiemcculloch", "", {
  dialect: "postgres",
  host: "localhost",
  port: 5432
});

connection
  .authenticate()
  .then(() =>
    console.log(
      "!!!!!Successfully connected to the postgres database for GYFanbase!!!!!"
    )
  )
  .catch(err =>
    console.log("Error connecting to the database for GYFanbase...", err)
  );

module.exports = connection;
