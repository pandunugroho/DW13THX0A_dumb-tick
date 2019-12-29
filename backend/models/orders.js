'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    event_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    total_price: DataTypes.INTEGER,
    status: DataTypes.STRING,
    attachment: DataTypes.TEXT
  }, {});
  orders.associate = function (models) {
    // associations can be defined here vvv
    orders.belongsTo(models.events, {
      foreignKey: "event_id",
      as: "events",
      sourceKey: "id"
    });
    orders.belongsTo(models.users, {
      foreignKey: "user_id",
      as: "users",
      sourceKey: "id"
    });

  };
  return orders;
};