"use strict";
module.exports = (sequelize, DataTypes) => {
  const Branch = sequelize.define(
    "Branch",
    {
      name: DataTypes.STRING,
      repoId: DataTypes.INTEGER,
      lastCommitDate: DataTypes.DATE,
      protected: DataTypes.BOOLEAN,
      lastSynced: DataTypes.DATE
    },
    {}
  );
  Branch.associate = function(models) {
    Branch.belongsTo(models.Repo, { foreignKey: "id", as: "repo" });
  };
  return Branch;
};
