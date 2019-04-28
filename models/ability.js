'use strict';
module.exports = (sequelize, DataTypes) => {
  const ability = sequelize.define('ability', {
    id: {type: DataTypes.INTEGER, primaryKey: true,},
    name: DataTypes.STRING,
    desc: DataTypes.TEXT
  }, {});
  ability.associate = function(models) {
    // associations can be defined here
    models.ability.belongsToMany(models.dex, {
      through: models.abilities_dexes
    })
    models.ability.hasMany(models.own)
  };
  return ability;
};
