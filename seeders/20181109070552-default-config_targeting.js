"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert(
        "config_targetings",
        [
          {
            users: [""],
            locations: [""],
            gender: 0.5,
            tags: ["photography", "travel"],
            rolling_tags: false,
            allow_personal_accounts: true,
            allow_business_accounts: true,
            allow_private_accounts: true,
            affinity_targeting: true,
            pool_targets: false,
            pool_name: "*",
            pool_to_discover_ratio: 2,
            target_class: 0,
            account_id: "0"
          }
        ],
        {}
      )
    ]);
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
