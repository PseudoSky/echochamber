"use strict";
module.exports = {
  up: (queryInterface, sequelize) => {
    return queryInterface
      .createTable("accounts", {
        account_id: {
          type: sequelize.INTEGER,
          unique: true,
          autoIncrement: true,
          primaryKey: true
        },
        user_id: {
          type: sequelize.INTEGER,
          allowNull: false
        },
        instagram_account_id: {
          type: sequelize.STRING,
          allowNull: true
        },
        platform: {
          type: sequelize.STRING,
          allowNull: false,
          primaryKey: true
        },
        username: {
          type: sequelize.STRING,
          allowNull: false,
          primaryKey: true
        },
        email: {
          type: sequelize.STRING,
          allowNull: false,
          primaryKey: true
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
        config_interaction_id: {
          type: sequelize.STRING,
          defaultValue: "default"
        },
        config_targeting_id: {
          type: sequelize.STRING,
          defaultValue: "default"
        },
        config_runtime_id: {
          type: sequelize.STRING,
          defaultValue: "default"
        },
        createdAt: {
          type: sequelize.DATE
        },
        updatedAt: {
          type: sequelize.DATE
        }
      })
      .then(() => {
        queryInterface.addConstraint("accounts", ["user_id"], {
          type: "foreign key",
          references: { table: "users", field: "user_id" }
        });
      });
  },
  down: (queryInterface, sequelize) => {
    return queryInterface.dropTable("accounts");
  }
};
