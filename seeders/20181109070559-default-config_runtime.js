"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "config_runtimes",
      [
        {
          account_id: 2,
          log_level: 10,
          log_mod: 1,
          proxy: true,
          proxy_zone: "static",
          roll_count: 1,
          min_follow_size: 50,
          min_inspect_size: 50,
          min_target_pool_size: 0,
          min_unfollow_size: 50,
          cycle_element_limit: 30,
          timeout: 48,
          timeout_cycle_all: 3600,
          timeout_cycle_expired: 300,
          timeout_cycle_pending: 900,
          timeout_cycle_self: 60,
          timeout_discover: 60,
          timeout_inspect: 60,
          timeout_print_summary: 5,
          timeout_process_feed: 150,
          timeout_update_preferences: 7200,
          backoff_inspect: 1
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
