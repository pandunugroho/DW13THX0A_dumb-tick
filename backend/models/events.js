'use strict';
module.exports = (sequelize, DataTypes) => {
  const events = sequelize.define('events', {
    title: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    startTime: DataTypes.STRING,
    endTime: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    address: DataTypes.TEXT,
    urlMaps: DataTypes.STRING,
    img: DataTypes.STRING,
    createdBy: DataTypes.INTEGER,
    imgHostedBy: DataTypes.STRING,
    hostedBy: DataTypes.STRING,
  }, {});
  events.associate = function(models) {
    // associations can be defined here
    events.belongsTo(models.categories, {
      foreignKey: "categoryId",
      // as: "categories",
      sourceKey: "id"
    });
    events.belongsTo(models.users, {
      foreignKey: "createdBy",
      sourceKey: "id"
    });
    events.hasMany(models.orders, {
      foreignKey: "eventId",
      sourceKey: "id"
    });
    events.hasMany(models.favorites, {
      foreignKey: "eventId",
      sourceKey: "id"
    });
  };
  return events;
};