"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("config_targetings", {
      version: {
        type: Sequelize.STRING,
        defaultValue: "default"
      },
      users: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      locations: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      gender: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      tags: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      rolling_tags: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      allow_personal_accounts: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      allow_business_accounts: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      allow_private_accounts: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      affinity_targeting: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      pool_targets: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      pool_name: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      pool_to_discover_ratio: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      target_class: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      account_id: {
        type: Sequelize.STRING,
        references: { model: "accounts", key: "account_id" }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("config_targetings");
  }
};