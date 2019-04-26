'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('nTypes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      normal: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      fire: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      water: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      electric: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      grass: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      ice: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      fighting: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      poison: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      ground: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      flying: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      psychic: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      bug: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      rock: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      ghost: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      dragon: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      dark: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      steel: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      fairy: {
        allowNull: false,
        type: Sequelize.DECIMAL
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
    return queryInterface.dropTable('nTypes');
  }
};
