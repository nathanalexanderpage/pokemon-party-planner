'use strict';
module.exports = (sequelize, DataTypes) => {
  const nOwnedPoke = sequelize.define('nOwnedPoke', {
    userId: DataTypes.INTEGER,
    nDexId: DataTypes.INTEGER,
    nickname: DataTypes.STRING,
    profilename: DataTypes.STRING,
    move1: DataTypes.INTEGER,
    move2: DataTypes.INTEGER,
    move3: DataTypes.INTEGER,
    move4: DataTypes.INTEGER,
    ability: DataTypes.STRING
  }, {});
  nOwnedPoke.associate = function(models) {
    // associations can be defined here
  };
  return nOwnedPoke;
};