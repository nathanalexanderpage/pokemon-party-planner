const express = require('express')
const request = require('request');
const cheerio = require('cheerio');
const async = require('async');
const db = require('../models')
// import mapSeries from 'async/mapSeries';
// import doLimit from './internal/doLimit';

const APP_POKEDEX_MAX = 49;
const GAME_POKEDEX_MAX = 721;

let moveArr = [];
let moveUrlArr = [];
let movesObjList = [];
let whoLearnsObjList= [];

let typeObjList = [
  {
    name: 'normal',
    id: 1
  },{
    name: 'fire',
    id: 2
  },{
    name: 'water',
    id: 3
  },{
    name: 'electric',
    id: 4
  },{
    name: 'grass',
    id: 5
  },{
    name: 'ice',
    id: 6
  },{
    name: 'fighting',
    id: 7
  },{
    name: 'poison',
    id: 8
  },{
    name: 'ground',
    id: 9
  },{
    name: 'flying',
    id: 10
  },{
    name: 'psychic',
    id: 11
  },{
    name: 'bug',
    id: 12
  },{
    name: 'rock',
    id: 13
  },{
    name: 'ghost',
    id: 14
  },{
    name: 'dragon',
    id: 15
  },{
    name: 'dark',
    id: 16
  },{
    name: 'steel',
    id: 17
  },{
    name: 'fairy',
    id: 18
  }
];
for (var i = 0; i < typeObjList.length; i++) {
  console.log(typeObjList[i].name);
}




function generateMovesObjList() {
  return new Promise(resolve => {

    request(`https://www.serebii.net/attackdex-xy/absorb.shtml`, (err, cheerioResp, html) => {
      if (!err && cheerioResp.statusCode == 200) {
        const $ = cheerio.load(html);

        for (var j = 0; j < $('select').length; j++) {
          for (var i = 1; i < $('select').eq(j).children('option').length; i++) {

            // properly capitalized name
            let moveName = $('select').eq(j).children('option').eq(i).text().toLowerCase();
            moveArr.push(moveName);

            // mutations to find URL-appropriate string
            let moveNameR = moveName.match(/(\w+['-]?)/g);
            let resultLowerCommas = moveNameR.join();
            let moveNameUrl = resultLowerCommas.replace(/,/g, '');
            // console.log(`moveNameUrl = ${moveNameUrl}`);
            moveUrlArr.push(moveNameUrl);

          }
        }


        // console.log(`moveArr = ${moveArr}`);


        moveArr.forEach((move, i) => {
          let newMoveObj = {
            id: i + 1,
            name: move,
            urlName: moveUrlArr[i]
          }
          movesObjList.push(newMoveObj);
        });

        resolve(movesObjList);

      }
    });

  });
}

async function asyncMapRequests() {
  console.log('calling asyncMapRequests');
  var result = await generateMovesObjList();
  // expected output: whatever's inside the parentheses of promisified function
  console.log(result);
  console.log('calling full generator');


  return new Promise(resolve => {
    async.mapSeries(movesObjList, scrapeMoves, (err, results) => {
      results.forEach((moveEach) => {
        db.move.findOrCreate({
          where: {
            id: moveEach.id
          },
          defaults: {
            name: moveEach.name,
            typeId: moveEach.typeId,
            desc: moveEach.moveDesc,
            category: moveEach.category,
            pp: moveEach.pp,
            power: moveEach.basePower,
            accuracy: moveEach.accuracy
          }
        })
      })
    });
    resolve(0);
  })


  function scrapeMoves(moveObj, callback) {
    request(`https://www.serebii.net/attackdex-xy/${moveObj.urlName}.shtml`, (err, cheerioResp, html) => {
      if (!err && cheerioResp.statusCode == 200) {
        const $ = cheerio.load(html)
        let moveName = $('.dextable').children('tbody').children('tr').eq(1).children('td').eq(0).text();
        let moveNameRegex = moveName.match(/\w+([\s'-]\w+([\s-]\w+)?)?/g);
        let moveType = $('.dextable').children('tbody').children('tr').eq(1).children('td').eq(1).children('a').attr('href');
        let moveTypeRegex = moveType.match(/\w+/g);
        let moveCat = $('.dextable').children('tbody').children('tr').eq(1).children('td').eq(2).children('a').attr('href');
        let moveCatRegex = moveCat.match(/\w+/g);
        let movePp = $('.dextable').children('tbody').children('tr').eq(3).children('td').eq(0).text();
        let movePpRegex = movePp.match(/\w+/g);
        let moveBasePower = $('.dextable').children('tbody').children('tr').eq(3).children('td').eq(1).text();
        let moveBasePowerRegex = moveBasePower.match(/\w+/g);
        let finalBasePower
        if (moveBasePowerRegex[0][0] === "?") {
          finalBasePower = "??"
        } else {
          finalBasePower = Number(moveBasePowerRegex[0])
        }
        let moveAccuracy = $('.dextable').children('tbody').children('tr').eq(3).children('td').eq(2).text();
        let moveAccuracyRegex = moveAccuracy.match(/\w+/g);
        let moveDesc = $('.dextable').eq(0).children('tbody').children('tr').eq(5).text();
        let moveDescRegex = moveDesc.match(/([\wé%]+[-'!,.\?\s])+/g).join(' ');
        let howManyLearn = $('.dextable').eq(2).children('tbody').children('tr').length - 2;

        let pokesWhoLearn = [];
        for (var i = 2; i < howManyLearn + 2; i++) {
          let pokeWhoLearns = $('.dextable').eq(2).children('tbody').children('tr').eq(i).children('td').eq(0).text();
          pokesWhoLearn.push(Number(pokeWhoLearns.slice(1,4)));
        }

        let howManyLearnBreeding = $('.dextable').eq(3).children('tbody').children('tr').length - 2;

        let pokesWhoLearnBreeding = [];
        for (var i = 2; i < howManyLearnBreeding + 2; i++) {
          let pokeWhoLearnsBreeding = $('.dextable').eq(3).children('tbody').children('tr').eq(i).children('td').eq(0).text();
          pokesWhoLearnBreeding.push(Number(pokeWhoLearnsBreeding.slice(1,4)));
        }

        let whoLearnsArr = pokesWhoLearn;
        pokesWhoLearnBreeding.forEach((poke, i) => {
          whoLearnsArr.indexOf(poke) ? whoLearnsArr.push(poke) : console.log("already present");
        })
        whoLearnsArr = whoLearnsArr.sort((a, b) => a - b);

        let typeId;
        // console.log(typeObjList.length);

        for (var i = 0; i < typeObjList.length; i++) {
          if (typeObjList[i].name === moveTypeRegex[2]) {

            typeId = i + 1;

          }
        }

        let moveData = {
          id: moveObj.id,
          name: moveNameRegex[0],
          type: moveTypeRegex[2],
          typeId: typeId,
          category: moveCatRegex[2],
          moveDesc: moveDescRegex,
          pp: Number(movePpRegex[0]),
          basePower: finalBasePower,
          accuracy: Number(moveAccuracyRegex[0]),
          whoLearns: whoLearnsArr
        }
        moveData.whoLearns.forEach((thePoke, i) => {
          if (thePoke <= APP_POKEDEX_MAX) {
            db.dexes_moves.findOrCreate({
              where: {
                dexId: thePoke,
                moveId: moveData.id
              }
            })
            .then((record, wasCreated)=>{
              console.log(`wasCreated: ${wasCreated}`);
              console.log(record);
            })
            .catch((err)=>{
              console.log('Error when iterating through dexes_moves relationships:', err);
            })
          }
        })
        whoLearnsObjList.push({id: moveData.id, whoLearns: moveData.whoLearns})
        console.log(moveData);
        callback(null, moveData);
      } else {
        callback('err', null);
      }
    })
  }
}

asyncMapRequests();



console.log("done");
// export default doLimit(mapLimit, 1);
