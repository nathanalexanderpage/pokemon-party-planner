let express = require('express')
const request = require('request');
let cheerio = require('cheerio');
let async = require('async');


request('https://www.serebii.net/pokedex-xy/181.shtml', (err, cheerioResp, html) => {
  if (!err && cheerioResp.statusCode == 200) {
    const $ = cheerio.load(html);
    let pokeName = $('.dextable').children('tbody').children('tr').eq(1).children('td').eq(1).text();
    console.log(pokeName);
    let pokeType = $('.dextable').children('tbody').children('tr').eq(1).children('td').eq(5).children('a').attr('href');
    console.log(pokeType);
    let pokeTypeRegex = /pokedex-xy/(/w+)\.shtml;
    let parsedPokeType = pokeType.match(pokeTypeRegex);
    console.log(parsedPokeType[1]);


    let pokeMove = $('[name=attacks]').next().children('tbody').children('tr').eq(2).children('td').eq(1).text();
    console.log(pokeMove);
  }
});
