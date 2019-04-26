'use strict';
module.exports = (sequelize, DataTypes) => {
  const nMove = sequelize.define('nMove', {
    type: DataTypes.INTEGER,
    power: DataTypes.INTEGER,
    category: DataTypes.STRING,
    accuracy: DataTypes.INTEGER
  }, {});
  nMove.associate = function(models) {
    // associations can be defined here
  };
  return nMove;
};