'use strict';
module.exports = (sequelize, DataTypes) => {
  const nDex = sequelize.define('nDex', {
    no: DataTypes.INTEGER,
    name: DataTypes.STRING,
    type1: DataTypes.INTEGER,
    type2: DataTypes.INTEGER,
    hp: DataTypes.INTEGER,
    att: DataTypes.INTEGER,
    def: DataTypes.INTEGER,
    spAtt: DataTypes.INTEGER,
    spDef: DataTypes.INTEGER,
    speed: DataTypes.INTEGER
  }, {});
  nDex.associate = function(models) {
    // associations can be defined here
  };
  return nDex;
};