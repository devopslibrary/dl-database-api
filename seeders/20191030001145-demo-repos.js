"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Repos",
      [
        {
          id: 1122,
          orgId: 11233903,
          name: "fancy-microservice",
          fullName: "sampleorg/fancy-microservice",
          createdAt: new Date(),
          updatedAt: new Date(),
          lastSynced: new Date(),
          defaultBranch: "master"
        },
        {
          id: 1133,
          orgId: 11233903,
          name: "old-java-backend",
          fullName: "sampleorg/old-java-backend",
          createdAt: new Date(),
          updatedAt: new Date(),
          lastSynced: new Date(),
          defaultBranch: "develop"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Repos", null, {});
  }
};
