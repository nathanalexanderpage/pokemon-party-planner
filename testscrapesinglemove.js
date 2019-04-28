const express = require('express')
const request = require('request');
const cheerio = require('cheerio');
const async = require('async');

moveObj = {
  id: 1,
  name: "thunderbolt"
}

myArr = [];


request(`https://www.serebii.net/attackdex-xy/${moveObj.name}.shtml`, (err, cheerioResp, html) => {
  if (!err && cheerioResp.statusCode == 200) {
    const $ = cheerio.load(html)
    let moveName = $('.dextable').children('tbody').children('tr').eq(1).children('td').eq(0).text();
    // console.log(moveName);
    let moveNameRegex = moveName.match(/[A-Za-z]+([\s'-][A-Za-z]+([\s-][A-Za-z]+)?)?/g);
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
    myArr.push(moveDescRegex);
    console.log(moveDescRegex);

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
      pp: Number(movePpRegex[0]),
      basePower: Number(moveBasePowerRegex[0]),
      accuracy: Number(moveAccuracyRegex[0]),
      whoLearns: whoLearnsArr
    }
    console.log(moveData);
  }
})
