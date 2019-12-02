"use strict";
module.exports = (sequelize, DataTypes) => {
  const Setting = sequelize.define(
    "Setting",
    {
      orgId: DataTypes.INTEGER,
      nukeStaleBranches: DataTypes.BOOLEAN,
      nukeStalePRs: DataTypes.BOOLEAN
    },
    {}
  );
  Setting.associate = function(models) {
    Setting.belongsTo(models.Org, { foreignKey: "id", as: "org" });
  };
  return Setting;
};
