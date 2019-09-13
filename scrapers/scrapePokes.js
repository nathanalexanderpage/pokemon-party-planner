console.log("INSIDE scrapePokes.js");

const express = require('express')
const request = require('request');
const cheerio = require('cheerio');
const async = require('async');
const db = require('../models')

let noArr = [];
let pokesObjList = [];

const APP_POKEDEX_MAX = 49;
const GAME_POKEDEX_MAX = 721;

console.log('running checks on variables:');
console.log(`APP_POKEDEX_MAX = ${APP_POKEDEX_MAX}`);

console.log('running scrapePokes.js');

function generateNoArr() {
  console.log('running generateNoArr');
  return new Promise(resolve => {

    for (var j = 1; j <= APP_POKEDEX_MAX; j++) {

      let no = `${10 > (j) ? `00${j}` : 100 > (j) ? `0${j}` : j}`;
      noArr.push(no)
      console.log(noArr);
    }
    resolve(noArr);

  });
}

async function asyncMapRequests() {
  console.log('running asyncMapRequests');
  let result = await generateNoArr();
  // expected output: whatever's inside the parentheses of promisified function
  console.log(result);
  console.log('running async.mapSeries');



  async.mapSeries(noArr, asyncfunc, (err, results) => {
    results.forEach(pokeRecord => {
      console.log(pokeRecord.id);
      // db.dex.findOrCreate({
      //   where: {
      //     id: pokeRecord.id,
      //     name: pokeRecord.name,
      //     genId: pokeRecord.genId,
      //     hp: pokeRecord.hp,
      //     attack: pokeRecord.baseAttack,
      //     defense: pokeRecord.baseDefense,
      //     spAttack: pokeRecord.baseSpAttack,
      //     spDefense: pokeRecord.baseSpDefense,
      //     speed: pokeRecord.baseSpeed
      //   }
      //   // console.log(`***INTO DATABASE*** id: ${pokeRecord.id}; name: ${pokeRecord.name}; genId: ${pokeRecord.genId}; HP: ${pokeRecord.hp}; A: ${pokeRecord.attack}; D: ${pokeRecord.defense}; SA: ${pokeRecord.spAttack}; SD: ${pokeRecord.spDefense}, S: ${pokeRecord.speed}`);
      // })
      // .then((newRecord, wasCreated) => {
      //   console.log(newRecord, wasCreated);
      // })
      // .catch(function(error) {
      //   console.log("error at db.dex.findOrCreate: ", error);
      // });
    })
  });


  function asyncfunc(no, callback) {
    request(`https://www.serebii.net/pokedex-xy/${no}.shtml`, (err, cheerioResp, html) => {
      if (!err && cheerioResp.statusCode == 200) {
        const $ = cheerio.load(html);
        let pokeName = $('.dextable').eq(1).children('tbody').children('tr').eq(1).children('td').eq(0).text();
        let dextableNo = $('.dextable').length;
        let baseStats = $('.dextable').eq(dextableNo - 1).children('tbody').children('tr').eq(2).children('td');

        let pokeHp = baseStats.eq(1).text();
        let pokeAtt = baseStats.eq(2).text();
        let pokeDef = baseStats.eq(3).text();
        let pokeSpAtt = baseStats.eq(4).text();
        let pokeSpDef = baseStats.eq(5).text();
        let pokeSpeed = baseStats.eq(6).text();

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
        console.log(pokeData);

        db.dex.findOrCreate({
          where: {
            id: pokeData.id,
            name: pokeData.name,
            genId: pokeData.genId,
            hp: pokeData.hp,
            attack: pokeData.baseAttack,
            defense: pokeData.baseDefense,
            spAttack: pokeData.baseSpAttack,
            spDefense: pokeData.baseSpDefense,
            speed: pokeData.baseSpeed
          }
          // console.log(`***INTO DATABASE*** id: ${pokeRecord.id}; name: ${pokeRecord.name}; genId: ${pokeRecord.genId}; HP: ${pokeRecord.hp}; A: ${pokeRecord.attack}; D: ${pokeRecord.defense}; SA: ${pokeRecord.spAttack}; SD: ${pokeRecord.spDefense}, S: ${pokeRecord.speed}`);
        })
        .then((newRecord, wasCreated) => {
          console.log(newRecord, wasCreated);
        })
        .catch(function(error) {
          console.log("error at db.dex.findOrCreate: ", error);
        });
        callback(null, pokeData);
      } else {
        callback('err', null);
      }
    })
  }



}

asyncMapRequests();
