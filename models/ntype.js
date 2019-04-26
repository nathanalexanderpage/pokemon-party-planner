'use strict';
module.exports = (sequelize, DataTypes) => {
  const nType = sequelize.define('nType', {
    name: DataTypes.STRING,
    normal: DataTypes.DECIMAL,
    fire: DataTypes.DECIMAL,
    water: DataTypes.DECIMAL,
    electric: DataTypes.DECIMAL,
    grass: DataTypes.DECIMAL,
    ice: DataTypes.DECIMAL,
    fighting: DataTypes.DECIMAL,
    poison: DataTypes.DECIMAL,
    ground: DataTypes.DECIMAL,
    flying: DataTypes.DECIMAL,
    psychic: DataTypes.DECIMAL,
    bug: DataTypes.DECIMAL,
    rock: DataTypes.DECIMAL,
    ghost: DataTypes.DECIMAL,
    dragon: DataTypes.DECIMAL,
    dark: DataTypes.DECIMAL,
    steel: DataTypes.DECIMAL,
    fairy: DataTypes.DECIMAL
  }, {});
  nType.associate = function(models) {
    // associations can be defined here
  };
  return nType;
};