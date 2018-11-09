"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      firstName: DataTypes.STRING
    },
    {}
  );
  User.associate = function(models) {
    // associations can be defined here
    models.User.belongsToMany(models.Account);
  };
  return User;
};
