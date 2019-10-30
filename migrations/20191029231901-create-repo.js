"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Repos", {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        unique: true
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      orgId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Orgs",
          key: "id"
        }
      },
      fullName: {
        allowNull: false,
        type: Sequelize.STRING
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
    return queryInterface.dropTable("Repos");
  }
};
