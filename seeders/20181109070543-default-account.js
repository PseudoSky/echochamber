"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "accounts",
      [
        {
          account_id: "0",
          platform: "instagram",
          username: "testusername",
          email: "demo@demo.com",
          password: "testpassword",
          active: "pending",
          beta: false,
          checkpoint_method: "email",
          uuid: "0"
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
