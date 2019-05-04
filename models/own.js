'use strict';
module.exports = (sequelize, DataTypes) => {
  const own = sequelize.define('own', {
    userId: DataTypes.INTEGER,
    dexId: DataTypes.INTEGER,
    abilityId: DataTypes.INTEGER,
    nickname: DataTypes.STRING,
    profilename: DataTypes.STRING
  }, {});
  own.associate = function(models) {
    // associations can be defined here
    models.own.belongsTo(models.dex);
    models.own.belongsTo(models.user);
    models.own.belongsToMany(models.move, {
      through: models.moves_owns
    })
    models.own.belongsToMany(models.party, {
      through: models.owns_parties
    })
    models.own.belongsTo(models.ability)
  };
  return own;
};
