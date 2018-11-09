"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.bulkInsert(
      "users",
      [
        {
          uuid: "0",
          firstName: "John",
          lastName: "Doe",
          password: "password",
          logins: 0,
          email: "demo@demo.com"
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
