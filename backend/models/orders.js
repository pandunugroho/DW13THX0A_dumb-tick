'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    eventId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    status: DataTypes.STRING,
    attachment: DataTypes.TEXT
  }, {});
  orders.associate = function (models) {
    // associations can be defined here vvv
    orders.belongsTo(models.events, {
      foreignKey: "eventId",
      // as: "events",
      sourceKey: "id"
    });
    orders.belongsTo(models.users, {
      foreignKey: "userId",
      // as: "users",
      sourceKey: "id"
    });

  };
  return orders;
};