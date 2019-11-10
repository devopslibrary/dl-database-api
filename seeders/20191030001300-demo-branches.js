"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Branches",
      [
        {
          id:
            "ZXYY6Q29tbWl0MTQ5OTQxNjc2OmVmMGNmNmEzZmQ0MGQ2NjBlNDUwMTNhODIxZDg0YTIyYTY5MmE0MWI=",
          repoId: 1122,
          name: "master",
          protected: true,
          lastCommitDate: new Date(),
          lastSynced: new Date()
        },
        {
          id:
            "HEL6Q29tbWl0MTQ5OTQxNjc2OmVmMGNmNmEzZmQ0MGQ2NjBlNDUwMTNhODIxZDg0YTIyYTY5MmE0MWI=",
          repoId: 1122,
          name: "feature/DL-25-Great-New-Feature",
          protected: false,
          lastCommitDate: new Date(),
          lastSynced: new Date()
        },
        {
          id:
            "BELLQ29tbWl0MTQ5OTQxNjc2OmVmMGNmNmEzZmQ0MGQ2NjBlNDUwMTNhODIxZDg0YTIyYTY5MmE0MWI=",
          repoId: 1133,
          name: "master",
          protected: true,
          lastCommitDate: new Date(2018, 7, 25),
          lastSynced: new Date()
        },
        {
          id:
            "WHATQ29tbWl0MTQ5OTQxNjc2OmVmMGNmNmEzZmQ0MGQ2NjBlNDUwMTNhODIxZDg0YTIyYTY5MmE0MWI=",
          repoId: 1133,
          name: "hotfix/long-forgotten-never-merged",
          protected: false,
          lastCommitDate: new Date(2012, 1, 25),
          lastSynced: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Branches", null, {});
  }
};
