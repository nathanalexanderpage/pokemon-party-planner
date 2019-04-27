const express = require('express')
const request = require('request');
const cheerio = require('cheerio');
const async = require('async');



let moveArr = [];
let movesObjList = [];




function generateMovesObjList() {
  return new Promise(resolve => {


    request(`https://www.serebii.net/attackdex-xy/absorb.shtml`, (err, cheerioResp, html) => {
      if (!err && cheerioResp.statusCode == 200) {
        const $ = cheerio.load(html)

        let moveName = $('select').eq(0).children('option').eq(1).text();

        for (var j = 0; j < $('select').length; j++) {
          for (var i = 1; i < $('select').eq(0).children('option').length; i++) {
            let moveName = $('select').eq(j).children('option').eq(i).text();
            moveArr.push(moveName)
          }
        }
        let dropbox1length = $('select').length
        //.eq(0).children('option').length

        console.log(moveArr);


        moveArr.forEach((move, i) => {
          let newMoveObj = {
            id: i + 1,
            name: move
          }
          movesObjList.push(newMoveObj);
        })

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



  async.map(movesObjList, asyncfunc, (err, results) => {
    console.log(results)
  });


  function asyncfunc(moveObj, callback) {
    request(`https://www.serebii.net/attackdex-xy/${moveObj.name}.shtml`, (err, cheerioResp, html) => {
      if (!err && cheerioResp.statusCode == 200) {
        const $ = cheerio.load(html)
        let moveName = $('.dextable').children('tbody').children('tr').eq(1).children('td').eq(0).text();
        console.log(moveName);
        let moveNameRegex = moveName.match(/\w+([\s'-]\w+([\s-]\w+)?)?/g);
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

        let newArr = pokesWhoLearn;
        pokesWhoLearnBreeding.forEach((poke, i) => {
          newArr.indexOf(poke) ? newArr.push(poke) : console.log("already present");
        })
        newArr = newArr.sort((a, b) => a - b);

        let moveData = {
          id: moveObj.id,
          name: moveNameRegex[0].toLowerCase(),
          type: moveTypeRegex[2],
          category: moveCatRegex[2],
          pp: Number(movePpRegex[0]),
          basePower: Number(moveBasePowerRegex[0]),
          accuracy: Number(moveAccuracyRegex[0]),
          whoLearns: newArr
        }
        callback(null, moveData);
      } else {
        callback('err', null);
      }
    })
  }



}

asyncMapRequests();
