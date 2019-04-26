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
    models.nOwnedPoke.belongsTo(models.user, {foreignKey: 'userId', targetKey: 'id'})
    models.nOwnedPoke.belongsTo(models.nDex, {foreignKey: 'nDexId', targetKey: 'no'})
    models.nOwnedPoke.belongsToMany(models.nParty, {foreignKey: 'nOwnedPokeId', sourceKey: 'id
    models.nOwnedPoke.hasOne(models.nMove, {foreignKey: 'move1', targetKey: 'id'})
    models.nOwnedPoke.hasOne(models.nMove, {foreignKey: 'move2', targetKey: 'id'})
    models.nOwnedPoke.hasOne(models.nMove, {foreignKey: 'move3', targetKey: 'id'})
    models.nOwnedPoke.hasOne(models.nMove, {foreignKey: 'move4', targetKey: 'id'})
  };
  return nOwnedPoke;
};
