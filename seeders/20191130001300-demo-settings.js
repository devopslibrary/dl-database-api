"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Settings",
      [
        {
          orgId: 11233903,
          nukeStaleBranches: false,
          nukeStalePRs: false,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Settings", null, {});
  }
};
