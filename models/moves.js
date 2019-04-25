'use strict';
module.exports = (sequelize, DataTypes) => {
  const moves = sequelize.define('moves', {
    name: DataTypes.STRING
  }, {});
  moves.associate = function(models) {
    // associations can be defined here
  };
  return moves;
};