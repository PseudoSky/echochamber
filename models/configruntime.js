"use strict";
module.exports = (sequelize, Sequelize) => {
  const ConfigRuntime = sequelize.define(
    "config_runtime",
    {
      config_runtime_id: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      version: {
        type: Sequelize.STRING,
        defaultValue: "default"
      },
      log_level: {
        type: Sequelize.INTEGER
      },
      log_mod: {
        type: Sequelize.INTEGER
      },
      // proxy Enable/Disable static IP proxy
      // proxy_zone Static ip resource identifier (proxy must be enabled)
      // roll_count Number of times a user has needed to roll/refresh their proxy address
      proxy: {
        type: Sequelize.BOOLEAN
      },
      proxy_zone: { type: Sequelize.STRING },
      roll_count: { type: Sequelize.INTEGER },
      // min_follow_size Queue constraint for the minimum size the follow queue should be
      // min_inspect_size Queue constraint for the minimum size the inspect queue should be
      // min_target_pool_size Target Pool constraint for the minimum number of targets available to the user
      // min_unfollow_size Queue constraint for the minimum size the unfollow queue should be
      // cycle_element_limit Number of elements to query per inspection cycle
      // QUEUE CONSTRAINTS
      min_follow_size: {
        type: Sequelize.INTEGER
      },
      min_inspect_size: {
        type: Sequelize.INTEGER
      },
      min_target_pool_size: {
        type: Sequelize.INTEGER
      },
      min_unfollow_size: {
        type: Sequelize.INTEGER
      },
      cycle_element_limit: {
        type: Sequelize.INTEGER
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
        type: Sequelize.INTEGER
      },
      timeout_cycle_expired: {
        type: Sequelize.INTEGER
      },
      timeout_cycle_pending: {
        type: Sequelize.INTEGER
      },
      timeout_cycle_self: {
        type: Sequelize.INTEGER
      },
      timeout_discover: {
        type: Sequelize.INTEGER
      },
      timeout_inspect: {
        type: Sequelize.INTEGER
      },
      timeout_print_summary: {
        type: Sequelize.INTEGER
      },
      timeout_process_feed: {
        type: Sequelize.INTEGER
      },
      timeout_update_preferences: {
        type: Sequelize.INTEGER
      },
      timeout: {
        type: Sequelize.INTEGER
      },
      backoff_inspect: {
        type: Sequelize.INTEGER,
        defaultValue: 1
      }
    },
    { timestamps: true }
  );
  ConfigRuntime.associate = function(models) {
    models.config_runtime.belongsTo(models.account, {
      through: models.config_runtime,
      foreignKey: "account_id"
    });
  };
  return ConfigRuntime;
};
