"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Branches",
      [
        {
          id: 555,
          repoId: 1122,
          name: "master",
          protected: true,
          lastCommitDate: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 556,
          repoId: 1122,
          name: "feature/DL-25-Great-New-Feature",
          protected: false,
          lastCommitDate: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 557,
          repoId: 1133,
          name: "master",
          protected: true,
          lastCommitDate: new Date(2018, 7, 25),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 558,
          repoId: 1133,
          name: "hotfix/long-forgotten-never-merged",
          protected: false,
          lastCommitDate: new Date(2012, 1, 25),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Branches", null, {});
  }
};
