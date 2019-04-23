'use strict';
module.exports = (sequelize, DataTypes) => {
  const party = sequelize.define('party', {
    userId: DataTypes.INTEGER,
    p1Id: DataTypes.INTEGER,
    p2Id: DataTypes.INTEGER,
    p3Id: DataTypes.INTEGER,
    p4Id: DataTypes.INTEGER,
    p5Id: DataTypes.INTEGER,
    p6Id: DataTypes.INTEGER
  }, {});
  party.associate = function(models) {
    // associations can be defined here
  };
  return party;
};