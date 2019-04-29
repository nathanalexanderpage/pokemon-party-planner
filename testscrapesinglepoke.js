const express = require('express')
const request = require('request');
const cheerio = require('cheerio');
const async = require('async');

pokeObj = {
  id: 413,
  name: "wormadam"
}

myArr = [];

let i = 669;

let no = `${10 > (i) ? `00${i}` : 100 > (i) ? `0${i}` : i}`;

console.log(no);

request(`https://www.serebii.net/pokedex-xy/${no}.shtml`, (err, cheerioResp, html) => {
  if (!err && cheerioResp.statusCode == 200) {
    const $ = cheerio.load(html);

    let pokeName = $('.dextable').children('tbody').children('tr').eq(1).children('td').eq(1).text().toLowerCase();
    let pokeNameRegex = pokeName.match(/\w+/g);
    let dextableNo = $('.dextable').length
    console.log(dextableNo);
    let baseStats = $('.dextable').eq(dextableNo - 1).children('tbody').children('tr').eq(2).children('td');

    let pokeHp = baseStats.eq(1).text();
    let pokeAtt= baseStats.eq(2).text();
    let pokeDef= baseStats.eq(3).text();
    let pokeSpAtt= baseStats.eq(4).text();
    let pokeSpDef= baseStats.eq(5).text();
    let pokeSpeed= baseStats.eq(6).text();



    let pokeData = {
      id: i,
      name: pokeNameRegex,
      hp: Number(pokeHp),
      baseAttack: Number(pokeAtt),
      baseDefense: Number(pokeDef),
      baseSpAttack: Number(pokeSpAtt),
      baseSpDefense: Number(pokeSpDef),
      baseSpeed: Number(pokeSpeed)
    }
    console.log(pokeData);
  }
})
