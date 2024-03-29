"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Branches", {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING,
        unique: true
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      repoId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Repos",
          key: "id"
        }
      },
      lastCommitDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      protected: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      lastSynced: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Branches");
  }
};
