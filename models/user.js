"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: DataTypes.STRING,
      fullName: DataTypes.STRING
    },
    {}
  );
  User.associate = function(models) {
    User.hasMany(models.OrgUser, { as: "orgs" });
  };
  return User;
};
