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
    models.nDex.belongsToMany(models.user, {
      through: models.nDexUser
    })
    models.nDex.hasMany(models.nOwnedPoke, {foreignKey: 'nOwnedPokeId', sourceKey: 'no'})
    models.nDex.hasOne(models.nType, {foreignKey: 'type1', targetKey: 'id'})
    models.nDex.hasOne(models.nType, {foreignKey: 'type2', targetKey: 'id'})
    models.nDex.belongsToMany(models.nMove, {
      through: models.nDexNMove
    })
  };
  return nDex;
};
