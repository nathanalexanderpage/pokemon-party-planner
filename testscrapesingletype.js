const express = require('express')
const request = require('request');
const cheerio = require('cheerio');
const async = require('async');

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

typeObj = typeObjList[1];
console.log(typeObj.name);

request(`https://www.serebii.net/attackdex-xy/${typeObj.name}.shtml`, (err, cheerioResp, html) => {
  if (!err && cheerioResp.statusCode == 200) {
    const $ = cheerio.load(html)

    let attacksThatAre = [];
    let howManyAre = $('.dextable').eq(0).children('tbody').children('tr').length - 1;


    console.log(howManyAre);

    for (var i = 1; i < howManyAre + 1; i++) {
      let attackThatIs = $('.dextable').eq(0).children('tbody').children('tr').eq(i).children('td').eq(0).text();
      let attackThatIsRegex = attackThatIs.match(/[A-Za-z]+([\s'-][A-Za-z]+([\s-][A-Za-z]+)?)?/g)[0];
      attacksThatAre.push(attackThatIsRegex);
    }


    let attacksByType = {
      id: typeObj.id,
      name: typeObj.name,
      whatAttacksAre: attacksThatAre
    }
    console.log(attacksByType);
  }
})
