const express = require('express')
const request = require('request');
const cheerio = require('cheerio');
const async = require('async');
// import mapSeries from 'async/mapSeries';
// import doLimit from './internal/doLimit';


let moveArr = [];
let moveUrlArr = [];
let movesObjList = [];




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



  async.mapSeries(movesObjList, asyncfunc, (err, results) => {
    console.log(results)
  });


  function asyncfunc(moveObj, callback) {
    request(`https://www.serebii.net/attackdex-xy/${moveObj.urlName}.shtml`, (err, cheerioResp, html) => {
      if (!err && cheerioResp.statusCode == 200) {
        const $ = cheerio.load(html)
        let moveName = $('.dextable').children('tbody').children('tr').eq(1).children('td').eq(0).text();
        let moveNameRegex = moveName.match(/\w+([\s'-]\w+([\s-]\w+)?)?/g);
        console.log(moveNameRegex);
        let moveType = $('.dextable').children('tbody').children('tr').eq(1).children('td').eq(1).children('a').attr('href');
        let moveTypeRegex = moveType.match(/\w+/g);
        let moveCat = $('.dextable').children('tbody').children('tr').eq(1).children('td').eq(2).children('a').attr('href');
        let moveCatRegex = moveCat.match(/\w+/g);
        let movePp = $('.dextable').children('tbody').children('tr').eq(3).children('td').eq(0).text();
        let movePpRegex = movePp.match(/\w+/g);
        let moveBasePower = $('.dextable').children('tbody').children('tr').eq(3).children('td').eq(1).text();
        let moveBasePowerRegex = moveBasePower.match(/\w+/g);
        let moveAccuracy = $('.dextable').children('tbody').children('tr').eq(3).children('td').eq(2).text();
        let moveAccuracyRegex = moveAccuracy.match(/\w+/g);
        let moveDesc = $('.dextable').eq(0).children('tbody').children('tr').eq(5).text();
        let moveDescRegex = moveDesc.match(/(\w+[-'!,.\?\s])+/g).join(' ');
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

        let moveData = {
          id: moveObj.id,
          name: moveNameRegex[0].toLowerCase(),
          type: moveTypeRegex[2],
          category: moveCatRegex[2],
          moveDesc: moveDescRegex,
          pp: Number(movePpRegex[0]),
          basePower: Number(moveBasePowerRegex[0]),
          accuracy: Number(moveAccuracyRegex[0]),
          whoLearns: whoLearnsArr
        }
        callback(null, moveData);
      } else {
        callback('err', null);
      }
    })
  }



}

asyncMapRequests();
// export default doLimit(mapLimit, 1);
