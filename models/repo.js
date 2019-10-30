"use strict";
module.exports = (sequelize, DataTypes) => {
  const Repo = sequelize.define(
    "Repo",
    {
      name: DataTypes.STRING,
      orgId: DataTypes.INTEGER,
      fullName: DataTypes.STRING
    },
    {}
  );
  Repo.associate = function(models) {
    Repo.belongsTo(models.Org, { foreignKey: "id", as: "org" });
    Repo.hasMany(models.Branch, { as: "branches" });
  };
  return Repo;
};
