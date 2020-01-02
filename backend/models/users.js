'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  }, {});
  users.associate = function(models) {
    // associations can be defined here
    users.hasMany(models.orders, {
      foreignKey: "userId",
      sourceKey: "id"
    });
    users.hasMany(models.events, {
      foreignKey: "createdBy",
      sourceKey: "id"
    });
    users.hasMany(models.favorites, {
      foreignKey: "userId",
      sourceKey: "id"
    });
  };
  return users;
};