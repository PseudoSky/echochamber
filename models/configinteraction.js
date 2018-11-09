"use strict";
module.exports = (sequelize, DataTypes) => {
  const ConfigInteraction = sequelize.define(
    "config_interaction",
    {
      version: DataTypes.STRING
    },
    {}
  );
  ConfigInteraction.associate = function(models) {
    models.ConfigInteraction.belongsTo(models.Account, {
      through: "account_id"
    });
  };
  return ConfigInteraction;
};
