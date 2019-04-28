'use strict';
module.exports = (sequelize, DataTypes) => {
  const moves_owns = sequelize.define('moves_owns', {
    moveId: DataTypes.INTEGER,
    ownId: DataTypes.INTEGER
  }, {});
  moves_owns.associate = function(models) {
    // associations can be defined here
  };
  return moves_owns;
};