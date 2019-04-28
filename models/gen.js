'use strict';
module.exports = (sequelize, DataTypes) => {
  const gen = sequelize.define('gen', {
    name: DataTypes.STRING
  }, {});
  gen.associate = function(models) {
    // associations can be defined here
    models.gen.hasMany(models.dex)
  };
  return gen;
};
