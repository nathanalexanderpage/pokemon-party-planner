'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('nDexes', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      type1: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      type2: {
        type: Sequelize.INTEGER
      },
      hp: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      att: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      def: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      spAtt: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      spDef: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      speed: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('nDexes');
  }
};
