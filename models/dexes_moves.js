'use strict';
module.exports = (sequelize, DataTypes) => {
  const dexes_moves = sequelize.define('dexes_moves', {
    dexId: DataTypes.INTEGER,
    moveId: DataTypes.INTEGER
  }, {});
  dexes_moves.associate = function(models) {
    // associations can be defined here
  };
  return dexes_moves;
};