"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Repos",
      [
        {
          id: 1122,
          orgId: 1234567890,
          name: "fancy-microservice",
          fullName: "sampleorg/fancy-microservice",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 1133,
          orgId: 1234567890,
          name: "old-java-backend",
          fullName: "sampleorg/old-java-backend",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Repos", null, {});
  }
};
