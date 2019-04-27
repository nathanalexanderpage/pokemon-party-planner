let express = require('express')
const request = require('request');
let cheerio = require('cheerio');
let async = require('async');


let move = "tackle";

let movesData = [];

let movesList = ["tackle", "leer", "megapunch"];


async.map(movesList, asyncfunc, (err, results) => {
  console.log(results)
});


function asyncfunc(move, callback) {
  request(`https://www.serebii.net/attackdex-xy/${move}.shtml`, (err, cheerioResp, html) => {
    if (!err && cheerioResp.statusCode == 200) {
      const $ = cheerio.load(html)
      let moveName = $('.dextable').children('tbody').children('tr').eq(1).children('td').eq(0).text();
      let moveNameRegex = moveName.match(/\w+([\s-]\w+([\s-]\w+)?)?/g);
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
      // movesData.push(pokesWhoLearn)
      // console.log(movesData);

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






// request('https://www.serebii.net/pokedex-xy/181.shtml', (err, cheerioResp, html) => {
//   if (!err && cheerioResp.statusCode == 200) {
//     const $ = cheerio.load(html);
//     let pokeName = $('.dextable').children('tbody').children('tr').eq(1).children('td').eq(1).text();
//     console.log(pokeName);
//     let pokeType = $('.dextable').children('tbody').children('tr').eq(1).children('td').eq(5).children('a').attr('href');
//     console.log(pokeType);
//
//
//     let pokeMove = $('[name=attacks]').next().children('tbody').children('tr').eq(2).children('td').eq(1).text();
//     console.log(pokeMove);
//   }
// });


// $('.apple', '#fruits').text()
// //=> Apple
//
// <ul id="fruits">
//   <li class="apple">Apple</li>
//   <li class="orange">Orange</li>
//   <li class="pear">Pear</li>
// </ul>
