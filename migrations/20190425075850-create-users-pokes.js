'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users_pokes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      pokeDex: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      profile_name: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      move1: {
        type: Sequelize.STRING
      },
      move2: {
        type: Sequelize.STRING
      },
      move3: {
        type: Sequelize.STRING
      },
      move4: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('users_pokes');
  }
};
