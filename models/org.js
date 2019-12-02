"use strict";
module.exports = (sequelize, DataTypes) => {
  const Org = sequelize.define(
    "Org",
    {
      name: DataTypes.STRING,
      installationId: DataTypes.INTEGER,
      lastSynced: DataTypes.DATE
    },
    {
      classMethods: {
        associate: function(models) {
          Org.hasOne(models.setting);
        }
      }
    }
  );
  Org.addHook("afterCreate", (org, options) => {
    models.Setting.create({
      OrgId: org.id
    });
  });
  Org.associate = function(models) {
    Org.hasMany(models.Repo, { as: "repos" });
    Org.hasMany(models.OrgUser, { as: "users" });
  };

  return Org;
};
