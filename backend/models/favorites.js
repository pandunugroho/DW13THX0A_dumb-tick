'use strict';
module.exports = (sequelize, DataTypes) => {
  const favorites = sequelize.define('favorites', {
    user_id: DataTypes.INTEGER,
    event_id: DataTypes.INTEGER
  }, {});
  favorites.associate = function(models) {
    // associations can be defined here
    favorites.belongsTo(models.events, {
      foreignKey: "event_id",
      as: "events",
      sourceKey: "id"
    });
    favorites.belongsTo(models.users, {
      foreignKey: "created_by",
      sourceKey: "id"
    });
  };
  return favorites;
};