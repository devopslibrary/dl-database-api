"use strict";
module.exports = (sequelize, DataTypes) => {
  const OrgUser = sequelize.define(
    "OrgUser",
    {
      orgId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER
    },
    {}
  );
  OrgUser.associate = function(models) {
    OrgUser.belongsTo(models.Org, { foreignKey: "id", as: "org" });
    OrgUser.belongsTo(models.User, { foreignKey: "id", as: "user" });
  };
  return OrgUser;
};
