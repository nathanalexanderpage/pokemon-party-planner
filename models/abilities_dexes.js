'use strict';
module.exports = (sequelize, DataTypes) => {
  const abilities_dexes = sequelize.define('abilities_dexes', {
    abilityId: DataTypes.INTEGER,
    dexId: DataTypes.INTEGER
  }, {});
  abilities_dexes.associate = function(models) {
    // associations can be defined here
  };
  return abilities_dexes;
};