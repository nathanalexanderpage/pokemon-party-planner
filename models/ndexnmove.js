'use strict';
module.exports = (sequelize, DataTypes) => {
  const nDexNMove = sequelize.define('nDexNMove', {
    nDexId: DataTypes.INTEGER,
    nMoveId: DataTypes.INTEGER
  }, {});
  nDexNMove.associate = function(models) {
    // associations can be defined here
  };
  return nDexNMove;
};