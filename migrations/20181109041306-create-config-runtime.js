"use strict";
module.exports = {
  up: (queryInterface, sequelize) => {
    return queryInterface
      .createTable("config_runtimes", {
        config_runtime_id: {
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
        log_level: {
          type: sequelize.INTEGER
        },
        log_mod: {
          type: sequelize.INTEGER
        },
        // proxy Enable/Disable static IP proxy
        // proxy_zone Static ip resource identifier (proxy must be enabled)
        // roll_count Number of times a user has needed to roll/refresh their proxy address
        proxy: {
          type: sequelize.BOOLEAN
        },
        proxy_zone: { type: sequelize.STRING },
        roll_count: { type: sequelize.INTEGER },
        // min_follow_size Queue constraint for the minimum size the follow queue should be
        // min_inspect_size Queue constraint for the minimum size the inspect queue should be
        // min_target_pool_size Target Pool constraint for the minimum number of targets available to the user
        // min_unfollow_size Queue constraint for the minimum size the unfollow queue should be
        // cycle_element_limit Number of elements to query per inspection cycle
        // QUEUE CONSTRAINTS
        min_follow_size: {
          type: sequelize.INTEGER
        },
        min_inspect_size: {
          type: sequelize.INTEGER
        },
        min_target_pool_size: {
          type: sequelize.INTEGER
        },
        min_unfollow_size: {
          type: sequelize.INTEGER
        },
        cycle_element_limit: {
          type: sequelize.INTEGER
        },
        // timeout_cycle_all Time until the bot inspects the entire expired/pending/self queues (sampled)
        // timeout_cycle_expired Time until the expired queue is inspected (sampled)
        // timeout_cycle_pending Time until the pending queue is inspected (sampled)
        // timeout_cycle_self Time until the user's profile is inspected for updates
        // timeout_discover Time until the discover feed is scanned for new users
        // timeout_inspect Time until the unprocessed data is ranked
        // timeout_print_summary Time until the action results are logged
        // timeout_process_feed Time until the user's feed is inspected
        // timeout_update_preferences Time until the user's preferences are checked for version changes
        //TIMEOUTS
        timeout_cycle_all: {
          type: sequelize.INTEGER
        },
        timeout_cycle_expired: {
          type: sequelize.INTEGER
        },
        timeout_cycle_pending: {
          type: sequelize.INTEGER
        },
        timeout_cycle_self: {
          type: sequelize.INTEGER
        },
        timeout_discover: {
          type: sequelize.INTEGER
        },
        timeout_inspect: {
          type: sequelize.INTEGER
        },
        timeout_print_summary: {
          type: sequelize.INTEGER
        },
        timeout_process_feed: {
          type: sequelize.INTEGER
        },
        timeout_update_preferences: {
          type: sequelize.INTEGER
        },
        timeout: {
          type: sequelize.INTEGER
        },
        backoff_inspect: {
          type: sequelize.INTEGER,
          defaultValue: 1
        },
        createdAt: {
          type: sequelize.DATE
        },
        updatedAt: {
          type: sequelize.DATE
        }
      })
      .then(() => {
        queryInterface.addConstraint("config_runtimes", ["account_id"], {
          type: "foreign key",
          references: { table: "accounts", field: "account_id" }
        });
      });
  },
  down: (queryInterface, sequelize) => {
    return queryInterface.dropTable("config_runtimes");
  }
};
