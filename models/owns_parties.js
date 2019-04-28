'use strict';
module.exports = (sequelize, DataTypes) => {
  const owns_parties = sequelize.define('owns_parties', {
    ownId: DataTypes.INTEGER,
    partyId: DataTypes.INTEGER
  }, {});
  owns_parties.associate = function(models) {
    // associations can be defined here
  };
  return owns_parties;
};