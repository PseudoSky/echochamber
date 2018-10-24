const Sequelize = require("sequelize");
const connection = require("./index.js");

// USERS;
const Users = connection.define("users", {
  uuid: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    primaryKey: true
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  logins: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1
  }
});

connection.sync({ force: false }); //remove force: false after initial schema is finalized

module.exports = {
  Users
};
