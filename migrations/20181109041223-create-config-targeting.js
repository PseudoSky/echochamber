"use strict";
module.exports = {
  up: (queryInterface, sequelize) => {
    return queryInterface
      .createTable("config_targetings", {
        config_targeting_id: {
          type: sequelize.INTEGER,
          unique: true,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        account_id: {
          type: sequelize.INTEGER,
          allowNull: false
        },
        version: {
          type: sequelize.STRING,
          defaultValue: "default"
        },
        users: {
          type: sequelize.TEXT,
          allowNull: false
        },
        locations: {
          type: sequelize.TEXT,
          allowNull: false
        },
        gender: {
          type: sequelize.FLOAT,
          allowNull: false
        },
        tags: {
          type: sequelize.TEXT,
          allowNull: false
        },
        rolling_tags: {
          type: sequelize.BOOLEAN,
          allowNull: false
        },
        allow_personal_accounts: {
          type: sequelize.BOOLEAN,
          allowNull: false
        },
        allow_business_accounts: {
          type: sequelize.BOOLEAN,
          allowNull: false
        },
        allow_private_accounts: {
          type: sequelize.BOOLEAN,
          allowNull: false
        },
        affinity_targeting: {
          type: sequelize.BOOLEAN,
          allowNull: false
        },
        pool_targets: {
          type: sequelize.BOOLEAN,
          allowNull: false
        },
        pool_name: {
          type: sequelize.TEXT,
          allowNull: false
        },
        pool_to_discover_ratio: {
          type: sequelize.FLOAT,
          allowNull: false
        },
        target_class: {
          type: sequelize.INTEGER,
          allowNull: false
        },
        createdAt: {
          type: sequelize.DATE
        },
        updatedAt: {
          type: sequelize.DATE
        }
      })
      .then(() => {
        queryInterface.addConstraint("config_targetings", ["account_id"], {
          type: "foreign key",
          references: { table: "accounts", field: "account_id" }
        });
      });
  },
  down: (queryInterface, sequelize) => {
    return queryInterface.dropTable("config_targetings");
  }
};
