'use strict';
module.exports = (sequelize, DataTypes) => {
  const dexes_types = sequelize.define('dexes_types', {
    dexId: DataTypes.INTEGER,
    typeId: DataTypes.INTEGER
  }, {});
  dexes_types.associate = function(models) {
    // associations can be defined here
  };
  return dexes_types;
};