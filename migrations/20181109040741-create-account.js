"use strict";
module.exports = {
  up: (queryInterface, sequelize) => {
    return queryInterface
      .createTable("accounts", {
        account_id: {
          type: sequelize.STRING,
          unique: true
        },
        platform: {
          type: sequelize.STRING,
          allowNull: false
        },
        username: {
          type: sequelize.STRING,
          allowNull: false
        },
        email: {
          type: sequelize.STRING,
          allowNull: false
        },
        password: {
          type: sequelize.STRING,
          allowNull: false
        },
        active: {
          type: sequelize.STRING,
          defaultValue: "pending",
          allowNull: false
        },
        beta: {
          type: sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false
        },
        checkpoint_method: {
          type: sequelize.STRING,
          allowNull: false
        },
        last_start: {
          type: sequelize.STRING
        },
        initial_date: {
          type: sequelize.DATE
        },
        initial_following_count: {
          type: sequelize.INTEGER
        },
        initial_follower_count: {
          type: sequelize.INTEGER
        },
        initial_media_count: {
          type: sequelize.INTEGER
        },
        initial_affinity: {
          type: sequelize.INTEGER
        },
        initial_affinity_mean: {
          type: sequelize.FLOAT
        },
        initial_affinity_cardinality: {
          type: sequelize.INTEGER
        },
        initial_affinity_min: {
          type: sequelize.INTEGER
        },
        initial_affinity_max: {
          type: sequelize.INTEGER
        },
        config_interaction_version: {
          type: sequelize.STRING,
          defaultValue: "default"
        },
        config_targeting_version: {
          type: sequelize.STRING,
          defaultValue: "default"
        },
        config_runtime_version: {
          type: sequelize.STRING,
          defaultValue: "default"
        },
        uuid: {
          type: sequelize.STRING,
          references: { model: "users", key: "uuid" }
        },
        createdAt: {
          type: sequelize.DATE
        },
        updatedAt: {
          type: sequelize.DATE
        }
      })
      .then(() => {
        queryInterface.sequelize.query(
          "alter table accounts add primary key(email, username, platform)"
        );
      });
  },
  down: (queryInterface, sequelize) => {
    return queryInterface.dropTable("accounts");
  }
};
