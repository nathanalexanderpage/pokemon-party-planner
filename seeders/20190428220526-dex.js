'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const express = require('express')
    const request = require('request');
    const cheerio = require('cheerio');
    const async = require('async');
    const db = require('../models')

    let noArr = [];
    let pokesObjList = [];




    function generateNoArr() {
      return new Promise(resolve => {

        for (var j = 1; j <= 721; j++) {

          let no = `${10 > (j) ? `00${j}` : 100 > (j) ? `0${j}` : j}`;
          noArr.push(no)
        }
        resolve(noArr);

      });
    }

    async function asyncMapRequests() {
      console.log('calling asyncMapRequests');
      let result = await generateNoArr();
      // expected output: whatever's inside the parentheses of promisified function
      console.log(result);
      console.log('calling full generator');



      async.mapSeries(noArr, asyncfunc, (err, mapSeriesResults) => {
        return mapSeriesResults;
      });


      function asyncfunc(no, callback) {
        request(`https://www.serebii.net/pokedex-xy/${no}.shtml`, (err, cheerioResp, html) => {
          if (!err && cheerioResp.statusCode == 200) {
            const $ = cheerio.load(html);
            let pokeName = $('.dextable').children('tbody').children('tr').eq(1).children('td').eq(1).text().toLowerCase();
            let pokeType = $('.dextable').children('tbody').children('tr').eq(1).children('td').eq(5).children('a').attr('href');
            let pokeTypeRegex = pokeType.match(/\w+/g)[2];
            let dextableNo = $('.dextable').length;
            let baseStats = $('.dextable').eq(dextableNo - 1).children('tbody').children('tr').eq(2).children('td');

            let pokeHp = baseStats.eq(1).text();
            let pokeAtt= baseStats.eq(2).text();
            let pokeDef= baseStats.eq(3).text();
            let pokeSpAtt= baseStats.eq(4).text();
            let pokeSpDef= baseStats.eq(5).text();
            let pokeSpeed= baseStats.eq(6).text();

            let pokeReg;
            switch (true) {
              case no <= 151:
                pokeReg = 1;
                break;
              case no > 151 && no <= 251:
                pokeReg = 2;
                break;
              case no > 251 && no <= 386:
                pokeReg = 3;
                break;
              case no > 386 && no <= 493:
                pokeReg = 4;
                break;
              case no > 493 && no <= 649:
                pokeReg = 5;
                break;
              default: pokeReg = 6;
            }

            let pokeData = {
              id: Number(no),
              name: pokeName,
              genId: pokeReg,
              hp: Number(pokeHp),
              baseAttack: Number(pokeAtt),
              baseDefense: Number(pokeDef),
              baseSpAttack: Number(pokeSpAtt),
              baseSpDefense: Number(pokeSpDef),
              baseSpeed: Number(pokeSpeed)
            }
            console.log(`${pokeData.id}: ${pokeData.name}`);
            callback(null, pokeData);
          } else {
            callback('err', null);
          }
        })
      }
    }

    function theWholeEnchilada() {
      return new Promise(resolve => {

        resolve(asyncMapRequests());
      });
    }


    let finalResults = await theWholeEnchilada();
    queryInterface.bulkInsert('dexes', finalResults, {});

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
