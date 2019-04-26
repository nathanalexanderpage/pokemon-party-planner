'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('pokes', [
      {
        no: 1,
        name: 'bulbasaur',
        type1: 4,
        type2: 7,
        hp: 50,
        att: 60,
        def: 60,
        spAtt: 50,
        spDef: 60,
        speed: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        no: 25,
        name: 'pikachu',
        type1: 3,
        type2: null,
        hp: 70,
        att: 50,
        def: 50,
        spAtt: 60,
        spDef: 70,
        speed: 60,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

  }
};
