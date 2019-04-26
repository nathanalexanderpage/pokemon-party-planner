let request = require('request');
let cheerio = require('cheerio');


request('https://www.serebii.net/attackdex-xy/headbutt.shtml', (err, cheerioResp, html) => {
  if (!err && cheerioResp.statusCode == 200) {
    const $ = cheerio.load(html)
    let moveName = $('.dextable').children('tbody').children('tr').eq(1).children('td').eq(0).text();
    console.log(moveName);
    // let printable2 = $('.dextable').children('tbody').children('tr').children('td').eq(1).children('a').attr('href');
    let moveType = $('.dextable').children('tbody').children('tr').eq(1).children('td').eq(1).children('a').attr('href');
    console.log(moveType);
    let moveCat = $('.dextable').children('tbody').children('tr').eq(1).children('td').eq(2).children('a').attr('href');
    console.log(moveCat);
    let movePp = $('.dextable').children('tbody').children('tr').eq(3).children('td').eq(0).text();
    console.log(movePp);
    let moveBasePower = $('.dextable').children('tbody').children('tr').eq(3).children('td').eq(1).text();
    console.log(moveBasePower);
    let moveAccuracy = $('.dextable').children('tbody').children('tr').eq(3).children('td').eq(2).text();
    console.log(moveAccuracy);

    let howManyLearn = $('.dextable').eq(2).children('tbody').children('tr').length - 2;
    console.log(howManyLearn);

    let pokesWhoLearn = [];
    for (var i = 2; i < howManyLearn + 2; i++) {
      let pokeWhoLearns = $('.dextable').eq(2).children('tbody').children('tr').eq(i).children('td').eq(0).text();
      pokesWhoLearn.push(Number(pokeWhoLearns.slice(1,4)));
    }
    console.log(pokesWhoLearn);

    let howManyLearnBreeding = $('.dextable').eq(3).children('tbody').children('tr').length - 2;
    console.log(howManyLearnBreeding);

    let pokesWhoLearnBreeding = [];
    for (var i = 2; i < howManyLearnBreeding + 2; i++) {
      let pokeWhoLearnsBreeding = $('.dextable').eq(3).children('tbody').children('tr').eq(i).children('td').eq(0).text();
      pokesWhoLearnBreeding.push(Number(pokeWhoLearnsBreeding.slice(1,4)));
    }
    console.log(pokesWhoLearnBreeding);
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
  }
});

request('https://www.serebii.net/pokedex-xy/181.shtml', (err, cheerioResp, html) => {
  if (!err && cheerioResp.statusCode == 200) {
    const $ = cheerio.load(html);
    
  }
});


// $('.apple', '#fruits').text()
// //=> Apple
//
// <ul id="fruits">
//   <li class="apple">Apple</li>
//   <li class="orange">Orange</li>
//   <li class="pear">Pear</li>
// </ul>
