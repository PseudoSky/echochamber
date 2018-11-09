"use strict";
module.exports = (sequelize, DataTypes) => {
  const ConfigTargeting = sequelize.define(
    "config_targeting",
    {
      users: DataTypes.STRING
    },
    {}
  );
  ConfigTargeting.associate = function(models) {
    models.ConfigInteraction.belongsTo(models.Account, {
      through: "account_id"
    });
  };
  return ConfigTargeting;
};
