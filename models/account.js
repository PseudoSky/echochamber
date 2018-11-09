"use strict";
module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define(
    "account",
    {
      account_id: { type: sequelize.STRING }
    },

    {}
  );
  Account.associate = function(models) {
    // associations can be defined here
    models.Account.belongsTo(models.User, {
      through: "uuid"
    });
    models.Account.belongsToMany(models.ConfigInteraction);
    models.Account.belongsToMany(models.ConfigTargeting);
    models.Account.belongsToMany(models.ConfigRuntime);
  };
  return Account;
};
