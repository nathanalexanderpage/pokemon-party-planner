'use strict';
module.exports = (sequelize, DataTypes) => {
  const nMove = sequelize.define('nMove', {
    type: DataTypes.INTEGER,
    power: DataTypes.INTEGER,
    category: DataTypes.STRING,
    accuracy: DataTypes.INTEGER
  }, {});
  nMove.associate = function(models) {
    // associations can be defined here
    models.nMove.belongstoMany(models.nOwnedPoke, {foreignKey: 'move1', sourceKey: 'id'})
    models.nMove.belongstoMany(models.nOwnedPoke, {foreignKey: 'move2', sourceKey: 'id'})
    models.nMove.belongstoMany(models.nOwnedPoke, {foreignKey: 'move3', sourceKey: 'id'})
    models.nMove.belongstoMany(models.nOwnedPoke, {foreignKey: 'move4', sourceKey: 'id'})
  };
  return nMove;
};
