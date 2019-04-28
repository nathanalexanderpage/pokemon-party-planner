'use strict';
module.exports = (sequelize, DataTypes) => {
  const dex = sequelize.define('dex', {
    id: {type: DataTypes.INTEGER, primaryKey: true,},
    name: DataTypes.STRING,
    genId: DataTypes.INTEGER,
    hp: DataTypes.INTEGER,
    attack: DataTypes.INTEGER,
    defense: DataTypes.INTEGER,
    spAttack: DataTypes.INTEGER,
    spDefense: DataTypes.INTEGER,
    speed: DataTypes.INTEGER
  }, {});
  dex.associate = function(models) {
    // associations can be defined here
    models.dex.belongsToMany(models.ability, {
      through: models.abilities_dexes
    })
    models.dex.belongsTo(models.gen)
    models.dex.belongsToMany(models.move, {
      through: models.dexes_moves
    })
    models.dex.hasMany(models.own)
    models.dex.belongsToMany(models.type, {
      through: models.dexes_types
    })
  };
  return dex;
};
