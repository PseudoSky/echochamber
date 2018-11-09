"use strict";
module.exports = (sequelize, DataTypes) => {
  const ConfigRuntime = sequelize.define(
    "config_runtime",
    {
      log_level: DataTypes.INTEGER
    },
    {}
  );
  ConfigRuntime.associate = function(models) {
    models.ConfigInteraction.belongsTo(models.Account, {
      through: "account_id"
    });
  };
  return ConfigRuntime;
};
