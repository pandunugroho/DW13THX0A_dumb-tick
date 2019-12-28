'use strict';
module.exports = (sequelize, DataTypes) => {
  const events = sequelize.define('events', {
    title: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    start_time: DataTypes.STRING,
    end_time: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    address: DataTypes.TEXT,
    url_maps: DataTypes.STRING,
    img: DataTypes.STRING,
    created_by: DataTypes.INTEGER
  }, {});
  events.associate = function(models) {
    // associations can be defined here
    events.belongsTo(models.categories, {
      foreignKey: "category_id",
      as: "categories",
      sourceKey: "id"
    });
    events.belongsTo(models.users, {
      foreignKey: "created_by",
      sourceKey: "id"
    });
  };
  return events;
};