"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Settings", {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        unique: true
      },
      orgId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Orgs",
          key: "id"
        }
      },
      nukeStaleBranches: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      nukeStalePRs: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Settings");
  }
};
