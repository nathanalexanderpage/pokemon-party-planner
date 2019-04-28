'use strict';
module.exports = (sequelize, DataTypes) => {
  const party = sequelize.define('party', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    desc: DataTypes.TEXT,
    public: DataTypes.BOOLEAN
  }, {});
  party.associate = function(models) {
    // associations can be defined here
    models.party.belongsTo(models.user)
    models.party.belongsToMany(models.own, {
      through: models.owns_parties
    })
  };
  return party;
};
