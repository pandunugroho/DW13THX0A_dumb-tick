'use strict';
module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('categories', {
    name: DataTypes.STRING,
    imgCategory: DataTypes.STRING
  }, {});
  categories.associate = function(models) {
    // associations can be defined here
    categories.hasMany(models.events, {
      foreignKey: "categoryId",
      sourceKey: "id"
    });
  };
  return categories;
};