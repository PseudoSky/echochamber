"use strict";
module.exports = {
  up: (queryInterface, sequelize) => {
    return queryInterface.createTable("users", {
      user_id: {
        type: sequelize.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true
      },
      firstName: {
        type: sequelize.STRING,
        allowNull: false
      },
      lastName: {
        type: sequelize.STRING,
        allowNull: false
      },
      email: {
        type: sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: sequelize.STRING,
        allowNull: false
      },
      logins: {
        type: sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      createdAt: {
        type: sequelize.DATE
      },
      updatedAt: {
        type: sequelize.DATE
      }
    });
  },
  down: (queryInterface, sequelize) => {
    return queryInterface.dropTable("users");
  }
};
