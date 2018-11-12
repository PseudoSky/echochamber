"use strict";
module.exports = (sequelize, Sequelize, queryInterface) => {
  const Account = sequelize.define(
    "account",
    {
      account_id: {
        type: Sequelize.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
      },
      instagram_account_id: {
        type: Sequelize.STRING,
        allowNull: true
      },
      platform: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      active: {
        type: Sequelize.STRING,
        defaultValue: "pending",
        allowNull: false
      },
      beta: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      checkpoint_method: {
        type: Sequelize.STRING,
        allowNull: false
      },
      last_start: {
        type: Sequelize.STRING
      },
      initial_date: {
        type: Sequelize.DATE
      },
      initial_following_count: {
        type: Sequelize.INTEGER
      },
      initial_follower_count: {
        type: Sequelize.INTEGER
      },
      initial_media_count: {
        type: Sequelize.INTEGER
      },
      initial_affinity: {
        type: Sequelize.INTEGER
      },
      initial_affinity_mean: {
        type: Sequelize.FLOAT
      },
      initial_affinity_cardinality: {
        type: Sequelize.INTEGER
      },
      initial_affinity_min: {
        type: Sequelize.INTEGER
      },
      initial_affinity_max: {
        type: Sequelize.INTEGER
      },
      config_interaction_id: {
        type: Sequelize.STRING,
        defaultValue: "default"
      },
      config_targeting_id: {
        type: Sequelize.STRING,
        defaultValue: "default"
      },
      config_runtime_id: {
        type: Sequelize.STRING,
        defaultValue: "default"
      }
    },
    { timestamps: true }
  );
  Account.associate = function(models) {
    // associations can be defined here
    models.account.belongsTo(models.user, {
      through: models.user,
      foreignKey: "user_id"
    });
    models.account.belongsToMany(models.config_interaction, {
      through: "account_id"
    });
    models.account.belongsToMany(models.config_targeting, {
      through: "account_id"
    });
    models.account.belongsToMany(models.config_runtime, {
      through: "account_id"
    });
  };
  // Account.removeAttribute("id");
  return Account;
};
