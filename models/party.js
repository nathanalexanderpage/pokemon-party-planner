'use strict';
module.exports = (sequelize, DataTypes) => {
  const party = sequelize.define('party', {
    userId: DataTypes.INTEGER,
    title: DataTypes.TEXT,
    isPublic: DataTypes.BOOLEAN
  }, {});
  party.associate = function(models) {
    // associations can be defined here
    models.party.belongsTo(models.user, {foreignKey: 'userId', targetKey: 'id'})
  };
  return party;
};
