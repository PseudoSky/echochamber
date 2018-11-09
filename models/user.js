"use strict";
module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "user",
    {
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
    },
    { timestamps: true }
  );
  User.associate = function(models) {
    // associations can be defined here
    models.user.belongsToMany(models.account, {
      through: "uuid"
    });
  };
  return User;
};
