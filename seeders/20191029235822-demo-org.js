"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Orgs",
      [
        {
          id: 11233903,
          name: "devopslibrary",
          installationId: 4631459,
          createdAt: new Date(),
          updatedAt: new Date(),
          lastSynced: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Orgs", null, {});
  }
};
