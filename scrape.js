let express = require('express')
let request = require('request');
let cheerio = require('cheerio');
let async = require('async');

let movesData = [];

let movesList = ["tackle", "pound", "megapunch"];

request(`https://www.serebii.net/attackdex-xy/${move}.shtml`, (err, cheerioResp, html) => {
  if (!err && cheerioResp.statusCode == 200) {
    const $ = cheerio.load(html)
    let moveName = $('.dextable').children('tbody').children('tr').eq(1).children('td').eq(0).text();
    let moveType = $('.dextable').children('tbody').children('tr').eq(1).children('td').eq(1).children('a').attr('href');
    let moveCat = $('.dextable').children('tbody').children('tr').eq(1).children('td').eq(2).children('a').attr('href');
    let movePp = $('.dextable').children('tbody').children('tr').eq(3).children('td').eq(0).text();
    let moveBasePower = $('.dextable').children('tbody').children('tr').eq(3).children('td').eq(1).text();
    let moveAccuracy = $('.dextable').children('tbody').children('tr').eq(3).children('td').eq(2).text();

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
    let moveData = {
      name: moveName,
      type: moveType,
      category: moveCat,
      pp: movePp,
      basePower: moveBasePower,
      accuracy: moveAccuracy,
      learnByLevelUp: howManyLearn,
      learnByLevelUpPokes: pokesWhoLearn,
      learnByBreeding: howManyLearnBreeding,
      learnByBreedingPokes: pokesWhoLearnBreeding
    }
    movesData.push(moveData)
  }
});






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
