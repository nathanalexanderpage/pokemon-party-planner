const express = require('express')
const request = require('request');
const cheerio = require('cheerio');
const async = require('async');
const db = require('./models')

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



  async.mapSeries(noArr, asyncfunc, (err, results) => {
    results.forEach(pokeRecord => {
      db.dex.findOrCreate({
        where: {
          id: pokeRecord.id,
          name: pokeRecord.name,
          genId: pokeRecord.genId,
          hp: pokeRecord.hp,
          attack: pokeRecord.baseAttack,
          defense: pokeRecord.baseDefense,
          spAttack: pokeRecord.baseSpAttack,
          spDefense: pokeRecord.baseSpDefense,
          speed: pokeRecord.baseSpeed
        }
        console.log(`***INTO DATABASE*** id: ${pokeRecord.id}; name: ${pokeRecord.name}; genId: ${pokeRecord.genId}; HP: ${pokeRecord.hp}; A: ${pokeRecord.attack}; D: ${pokeRecord.defense}; SA: ${pokeRecord.spAttack}; SD: ${pokeRecord.spDefense}, S: ${pokeRecord.speed}`);
      })
      .then((newRecord, wasCreated) => {
      })
      .catch(function(error) {
        console.log("error at db.dex.findOrCreate: ", error);
      });
    })
  });


  function asyncfunc(no, callback) {
    request(`https://www.serebii.net/pokedex-xy/${no}.shtml`, (err, cheerioResp, html) => {
      if (!err && cheerioResp.statusCode == 200) {
        const $ = cheerio.load(html);
        let pokeName = $('.dextable').children('tbody').children('tr').eq(1).children('td').eq(1).text().toLowerCase();
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
        callback(null, pokeData);
      } else {
        callback('err', null);
      }
    })
  }



}

asyncMapRequests();
