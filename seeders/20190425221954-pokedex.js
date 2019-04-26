'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('pokes', [
{
dex: 1,
name: "bulbasaur",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 2,
name: "ivysaur",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 3,
name: "venusaur",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 4,
name: "charmander",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 5,
name: "charmeleon",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 6,
name: "charizard",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 7,
name: "squirtle",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 8,
name: "wartortle",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 9,
name: "blastoise",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 10,
name: "caterpie",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 11,
name: "metapod",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 12,
name: "butterfree",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 13,
name: "weedle",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 14,
name: "kakuna",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 15,
name: "beedrill",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 16,
name: "pidgey",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 17,
name: "pidgeotto",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 18,
name: "pidgeot",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 19,
name: "rattata",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 20,
name: "raticate",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 21,
name: "spearow",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 22,
name: "fearow",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 23,
name: "ekans",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 24,
name: "arbok",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 25,
name: "pikachu",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 26,
name: "raichu",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 27,
name: "sandshrew",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 28,
name: "sandslash",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 29,
name: "nidoran-f",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 30,
name: "nidorina",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 31,
name: "nidoqueen",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 32,
name: "nidoran-m",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 33,
name: "nidorino",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 34,
name: "nidoking",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 35,
name: "clefairy",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 36,
name: "clefable",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 37,
name: "vulpix",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 38,
name: "ninetales",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 39,
name: "jigglypuff",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 40,
name: "wigglytuff",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 41,
name: "zubat",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 42,
name: "golbat",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 43,
name: "oddish",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 44,
name: "gloom",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 45,
name: "vileplume",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 46,
name: "paras",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 47,
name: "parasect",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 48,
name: "venonat",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 49,
name: "venomoth",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 50,
name: "diglett",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 51,
name: "dugtrio",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 52,
name: "meowth",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 53,
name: "persian",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 54,
name: "psyduck",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 55,
name: "golduck",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 56,
name: "mankey",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 57,
name: "primeape",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 58,
name: "growlithe",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 59,
name: "arcanine",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 60,
name: "poliwag",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 61,
name: "poliwhirl",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 62,
name: "poliwrath",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 63,
name: "abra",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 64,
name: "kadabra",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 65,
name: "alakazam",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 66,
name: "machop",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 67,
name: "machoke",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 68,
name: "machamp",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 69,
name: "bellsprout",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 70,
name: "weepinbell",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 71,
name: "victreebel",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 72,
name: "tentacool",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 73,
name: "tentacruel",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 74,
name: "geodude",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 75,
name: "graveler",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 76,
name: "golem",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 77,
name: "ponyta",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 78,
name: "rapidash",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 79,
name: "slowpoke",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 80,
name: "slowbro",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 81,
name: "magnemite",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 82,
name: "magneton",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 83,
name: "farfetchd",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 84,
name: "doduo",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 85,
name: "dodrio",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 86,
name: "seel",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 87,
name: "dewgong",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 88,
name: "grimer",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 89,
name: "muk",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 90,
name: "shellder",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 91,
name: "cloyster",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 92,
name: "gastly",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 93,
name: "haunter",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 94,
name: "gengar",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 95,
name: "onix",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 96,
name: "drowzee",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 97,
name: "hypno",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 98,
name: "krabby",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 99,
name: "kingler",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 100,
name: "voltorb",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 101,
name: "electrode",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 102,
name: "exeggcute",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 103,
name: "exeggutor",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 104,
name: "cubone",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 105,
name: "marowak",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 106,
name: "hitmonlee",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 107,
name: "hitmonchan",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 108,
name: "lickitung",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 109,
name: "koffing",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 110,
name: "weezing",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 111,
name: "rhyhorn",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 112,
name: "rhydon",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 113,
name: "chansey",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 114,
name: "tangela",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 115,
name: "kangaskhan",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 116,
name: "horsea",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 117,
name: "seadra",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 118,
name: "goldeen",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 119,
name: "seaking",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 120,
name: "staryu",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 121,
name: "starmie",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 122,
name: "mr-mime",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 123,
name: "scyther",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 124,
name: "jynx",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 125,
name: "electabuzz",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 126,
name: "magmar",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 127,
name: "pinsir",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 128,
name: "tauros",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 129,
name: "magikarp",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 130,
name: "gyarados",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 131,
name: "lapras",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 132,
name: "ditto",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 133,
name: "eevee",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 134,
name: "vaporeon",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 135,
name: "jolteon",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 136,
name: "flareon",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 137,
name: "porygon",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 138,
name: "omanyte",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 139,
name: "omastar",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 140,
name: "kabuto",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 141,
name: "kabutops",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 142,
name: "aerodactyl",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 143,
name: "snorlax",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 144,
name: "articuno",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 145,
name: "zapdos",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 146,
name: "moltres",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 147,
name: "dratini",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 148,
name: "dragonair",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 149,
name: "dragonite",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 150,
name: "mewtwo",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 151,
name: "mew",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 152,
name: "chikorita",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 153,
name: "bayleef",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 154,
name: "meganium",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 155,
name: "cyndaquil",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 156,
name: "quilava",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 157,
name: "typhlosion",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 158,
name: "totodile",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 159,
name: "croconaw",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 160,
name: "feraligatr",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 161,
name: "sentret",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 162,
name: "furret",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 163,
name: "hoothoot",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 164,
name: "noctowl",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 165,
name: "ledyba",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 166,
name: "ledian",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 167,
name: "spinarak",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 168,
name: "ariados",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 169,
name: "crobat",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 170,
name: "chinchou",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 171,
name: "lanturn",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 172,
name: "pichu",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 173,
name: "cleffa",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 174,
name: "igglybuff",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 175,
name: "togepi",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 176,
name: "togetic",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 177,
name: "natu",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 178,
name: "xatu",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 179,
name: "mareep",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 180,
name: "flaaffy",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 181,
name: "ampharos",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 182,
name: "bellossom",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 183,
name: "marill",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 184,
name: "azumarill",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 185,
name: "sudowoodo",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 186,
name: "politoed",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 187,
name: "hoppip",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 188,
name: "skiploom",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 189,
name: "jumpluff",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 190,
name: "aipom",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 191,
name: "sunkern",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 192,
name: "sunflora",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 193,
name: "yanma",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 194,
name: "wooper",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 195,
name: "quagsire",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 196,
name: "espeon",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 197,
name: "umbreon",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 198,
name: "murkrow",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 199,
name: "slowking",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 200,
name: "misdreavus",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 201,
name: "unown",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 202,
name: "wobbuffet",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 203,
name: "girafarig",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 204,
name: "pineco",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 205,
name: "forretress",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 206,
name: "dunsparce",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 207,
name: "gligar",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 208,
name: "steelix",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 209,
name: "snubbull",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 210,
name: "granbull",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 211,
name: "qwilfish",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 212,
name: "scizor",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 213,
name: "shuckle",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 214,
name: "heracross",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 215,
name: "sneasel",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 216,
name: "teddiursa",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 217,
name: "ursaring",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 218,
name: "slugma",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 219,
name: "magcargo",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 220,
name: "swinub",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 221,
name: "piloswine",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 222,
name: "corsola",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 223,
name: "remoraid",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 224,
name: "octillery",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 225,
name: "delibird",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 226,
name: "mantine",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 227,
name: "skarmory",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 228,
name: "houndour",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 229,
name: "houndoom",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 230,
name: "kingdra",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 231,
name: "phanpy",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 232,
name: "donphan",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 233,
name: "porygon2",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 234,
name: "stantler",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 235,
name: "smeargle",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 236,
name: "tyrogue",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 237,
name: "hitmontop",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 238,
name: "smoochum",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 239,
name: "elekid",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 240,
name: "magby",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 241,
name: "miltank",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 242,
name: "blissey",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 243,
name: "raikou",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 244,
name: "entei",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 245,
name: "suicune",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 246,
name: "larvitar",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 247,
name: "pupitar",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 248,
name: "tyranitar",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 249,
name: "lugia",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 250,
name: "ho-oh",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 251,
name: "celebi",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 252,
name: "treecko",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 253,
name: "grovyle",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 254,
name: "sceptile",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 255,
name: "torchic",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 256,
name: "combusken",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 257,
name: "blaziken",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 258,
name: "mudkip",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 259,
name: "marshtomp",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 260,
name: "swampert",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 261,
name: "poochyena",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 262,
name: "mightyena",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 263,
name: "zigzagoon",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 264,
name: "linoone",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 265,
name: "wurmple",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 266,
name: "silcoon",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 267,
name: "beautifly",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 268,
name: "cascoon",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 269,
name: "dustox",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 270,
name: "lotad",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 271,
name: "lombre",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 272,
name: "ludicolo",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 273,
name: "seedot",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 274,
name: "nuzleaf",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 275,
name: "shiftry",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 276,
name: "taillow",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 277,
name: "swellow",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 278,
name: "wingull",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 279,
name: "pelipper",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 280,
name: "ralts",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 281,
name: "kirlia",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 282,
name: "gardevoir",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 283,
name: "surskit",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 284,
name: "masquerain",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 285,
name: "shroomish",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 286,
name: "breloom",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 287,
name: "slakoth",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 288,
name: "vigoroth",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 289,
name: "slaking",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 290,
name: "nincada",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 291,
name: "ninjask",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 292,
name: "shedinja",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 293,
name: "whismur",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 294,
name: "loudred",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 295,
name: "exploud",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 296,
name: "makuhita",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 297,
name: "hariyama",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 298,
name: "azurill",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 299,
name: "nosepass",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 300,
name: "skitty",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 301,
name: "delcatty",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 302,
name: "sableye",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 303,
name: "mawile",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 304,
name: "aron",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 305,
name: "lairon",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 306,
name: "aggron",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 307,
name: "meditite",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 308,
name: "medicham",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 309,
name: "electrike",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 310,
name: "manectric",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 311,
name: "plusle",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 312,
name: "minun",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 313,
name: "volbeat",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 314,
name: "illumise",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 315,
name: "roselia",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 316,
name: "gulpin",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 317,
name: "swalot",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 318,
name: "carvanha",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 319,
name: "sharpedo",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 320,
name: "wailmer",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 321,
name: "wailord",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 322,
name: "numel",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 323,
name: "camerupt",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 324,
name: "torkoal",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 325,
name: "spoink",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 326,
name: "grumpig",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 327,
name: "spinda",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 328,
name: "trapinch",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 329,
name: "vibrava",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 330,
name: "flygon",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 331,
name: "cacnea",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 332,
name: "cacturne",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 333,
name: "swablu",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 334,
name: "altaria",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 335,
name: "zangoose",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 336,
name: "seviper",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 337,
name: "lunatone",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 338,
name: "solrock",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 339,
name: "barboach",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 340,
name: "whiscash",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 341,
name: "corphish",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 342,
name: "crawdaunt",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 343,
name: "baltoy",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 344,
name: "claydol",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 345,
name: "lileep",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 346,
name: "cradily",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 347,
name: "anorith",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 348,
name: "armaldo",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 349,
name: "feebas",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 350,
name: "milotic",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 351,
name: "castform",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 352,
name: "kecleon",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 353,
name: "shuppet",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 354,
name: "banette",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 355,
name: "duskull",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 356,
name: "dusclops",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 357,
name: "tropius",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 358,
name: "chimecho",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 359,
name: "absol",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 360,
name: "wynaut",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 361,
name: "snorunt",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 362,
name: "glalie",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 363,
name: "spheal",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 364,
name: "sealeo",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 365,
name: "walrein",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 366,
name: "clamperl",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 367,
name: "huntail",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 368,
name: "gorebyss",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 369,
name: "relicanth",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 370,
name: "luvdisc",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 371,
name: "bagon",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 372,
name: "shelgon",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 373,
name: "salamence",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 374,
name: "beldum",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 375,
name: "metang",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 376,
name: "metagross",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 377,
name: "regirock",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 378,
name: "regice",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 379,
name: "registeel",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 380,
name: "latias",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 381,
name: "latios",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 382,
name: "kyogre",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 383,
name: "groudon",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 384,
name: "rayquaza",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 385,
name: "jirachi",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 386,
name: "deoxys-normal",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 387,
name: "turtwig",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 388,
name: "grotle",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 389,
name: "torterra",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 390,
name: "chimchar",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 391,
name: "monferno",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 392,
name: "infernape",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 393,
name: "piplup",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 394,
name: "prinplup",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 395,
name: "empoleon",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 396,
name: "starly",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 397,
name: "staravia",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 398,
name: "staraptor",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 399,
name: "bidoof",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 400,
name: "bibarel",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 401,
name: "kricketot",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 402,
name: "kricketune",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 403,
name: "shinx",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 404,
name: "luxio",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 405,
name: "luxray",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 406,
name: "budew",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 407,
name: "roserade",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 408,
name: "cranidos",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 409,
name: "rampardos",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 410,
name: "shieldon",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 411,
name: "bastiodon",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 412,
name: "burmy",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 413,
name: "wormadam-plant",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 414,
name: "mothim",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 415,
name: "combee",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 416,
name: "vespiquen",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 417,
name: "pachirisu",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 418,
name: "buizel",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 419,
name: "floatzel",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 420,
name: "cherubi",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 421,
name: "cherrim",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 422,
name: "shellos",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 423,
name: "gastrodon",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 424,
name: "ambipom",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 425,
name: "drifloon",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 426,
name: "drifblim",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 427,
name: "buneary",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 428,
name: "lopunny",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 429,
name: "mismagius",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 430,
name: "honchkrow",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 431,
name: "glameow",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 432,
name: "purugly",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 433,
name: "chingling",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 434,
name: "stunky",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 435,
name: "skuntank",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 436,
name: "bronzor",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 437,
name: "bronzong",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 438,
name: "bonsly",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 439,
name: "mime-jr",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 440,
name: "happiny",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 441,
name: "chatot",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 442,
name: "spiritomb",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 443,
name: "gible",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 444,
name: "gabite",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 445,
name: "garchomp",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 446,
name: "munchlax",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 447,
name: "riolu",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 448,
name: "lucario",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 449,
name: "hippopotas",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 450,
name: "hippowdon",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 451,
name: "skorupi",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 452,
name: "drapion",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 453,
name: "croagunk",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 454,
name: "toxicroak",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 455,
name: "carnivine",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 456,
name: "finneon",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 457,
name: "lumineon",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 458,
name: "mantyke",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 459,
name: "snover",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 460,
name: "abomasnow",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 461,
name: "weavile",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 462,
name: "magnezone",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 463,
name: "lickilicky",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 464,
name: "rhyperior",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 465,
name: "tangrowth",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 466,
name: "electivire",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 467,
name: "magmortar",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 468,
name: "togekiss",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 469,
name: "yanmega",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 470,
name: "leafeon",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 471,
name: "glaceon",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 472,
name: "gliscor",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 473,
name: "mamoswine",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 474,
name: "porygon-z",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 475,
name: "gallade",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 476,
name: "probopass",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 477,
name: "dusknoir",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 478,
name: "froslass",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 479,
name: "rotom",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 480,
name: "uxie",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 481,
name: "mesprit",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 482,
name: "azelf",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 483,
name: "dialga",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 484,
name: "palkia",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 485,
name: "heatran",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 486,
name: "regigigas",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 487,
name: "giratina-altered",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 488,
name: "cresselia",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 489,
name: "phione",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 490,
name: "manaphy",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 491,
name: "darkrai",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 492,
name: "shaymin-land",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 493,
name: "arceus",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 494,
name: "victini",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 495,
name: "snivy",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 496,
name: "servine",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 497,
name: "serperior",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 498,
name: "tepig",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 499,
name: "pignite",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 500,
name: "emboar",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 501,
name: "oshawott",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 502,
name: "dewott",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 503,
name: "samurott",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 504,
name: "patrat",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 505,
name: "watchog",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 506,
name: "lillipup",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 507,
name: "herdier",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 508,
name: "stoutland",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 509,
name: "purrloin",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 510,
name: "liepard",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 511,
name: "pansage",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 512,
name: "simisage",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 513,
name: "pansear",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 514,
name: "simisear",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 515,
name: "panpour",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 516,
name: "simipour",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 517,
name: "munna",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 518,
name: "musharna",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 519,
name: "pidove",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 520,
name: "tranquill",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 521,
name: "unfezant",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 522,
name: "blitzle",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 523,
name: "zebstrika",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 524,
name: "roggenrola",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 525,
name: "boldore",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 526,
name: "gigalith",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 527,
name: "woobat",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 528,
name: "swoobat",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 529,
name: "drilbur",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 530,
name: "excadrill",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 531,
name: "audino",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 532,
name: "timburr",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 533,
name: "gurdurr",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 534,
name: "conkeldurr",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 535,
name: "tympole",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 536,
name: "palpitoad",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 537,
name: "seismitoad",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 538,
name: "throh",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 539,
name: "sawk",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 540,
name: "sewaddle",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 541,
name: "swadloon",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 542,
name: "leavanny",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 543,
name: "venipede",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 544,
name: "whirlipede",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 545,
name: "scolipede",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 546,
name: "cottonee",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 547,
name: "whimsicott",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 548,
name: "petilil",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 549,
name: "lilligant",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 550,
name: "basculin-red-striped",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 551,
name: "sandile",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 552,
name: "krokorok",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 553,
name: "krookodile",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 554,
name: "darumaka",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 555,
name: "darmanitan-standard",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 556,
name: "maractus",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 557,
name: "dwebble",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 558,
name: "crustle",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 559,
name: "scraggy",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 560,
name: "scrafty",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 561,
name: "sigilyph",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 562,
name: "yamask",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 563,
name: "cofagrigus",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 564,
name: "tirtouga",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 565,
name: "carracosta",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 566,
name: "archen",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 567,
name: "archeops",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 568,
name: "trubbish",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 569,
name: "garbodor",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 570,
name: "zorua",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 571,
name: "zoroark",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 572,
name: "minccino",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 573,
name: "cinccino",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 574,
name: "gothita",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 575,
name: "gothorita",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 576,
name: "gothitelle",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 577,
name: "solosis",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 578,
name: "duosion",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 579,
name: "reuniclus",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 580,
name: "ducklett",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 581,
name: "swanna",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 582,
name: "vanillite",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 583,
name: "vanillish",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 584,
name: "vanilluxe",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 585,
name: "deerling",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 586,
name: "sawsbuck",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 587,
name: "emolga",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 588,
name: "karrablast",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 589,
name: "escavalier",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 590,
name: "foongus",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 591,
name: "amoonguss",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 592,
name: "frillish",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 593,
name: "jellicent",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 594,
name: "alomomola",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 595,
name: "joltik",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 596,
name: "galvantula",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 597,
name: "ferroseed",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 598,
name: "ferrothorn",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 599,
name: "klink",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 600,
name: "klang",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 601,
name: "klinklang",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 602,
name: "tynamo",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 603,
name: "eelektrik",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 604,
name: "eelektross",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 605,
name: "elgyem",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 606,
name: "beheeyem",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 607,
name: "litwick",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 608,
name: "lampent",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 609,
name: "chandelure",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 610,
name: "axew",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 611,
name: "fraxure",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 612,
name: "haxorus",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 613,
name: "cubchoo",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 614,
name: "beartic",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 615,
name: "cryogonal",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 616,
name: "shelmet",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 617,
name: "accelgor",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 618,
name: "stunfisk",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 619,
name: "mienfoo",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 620,
name: "mienshao",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 621,
name: "druddigon",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 622,
name: "golett",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 623,
name: "golurk",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 624,
name: "pawniard",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 625,
name: "bisharp",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 626,
name: "bouffalant",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 627,
name: "rufflet",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 628,
name: "braviary",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 629,
name: "vullaby",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 630,
name: "mandibuzz",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 631,
name: "heatmor",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 632,
name: "durant",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 633,
name: "deino",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 634,
name: "zweilous",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 635,
name: "hydreigon",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 636,
name: "larvesta",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 637,
name: "volcarona",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 638,
name: "cobalion",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 639,
name: "terrakion",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 640,
name: "virizion",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 641,
name: "tornadus-incarnate",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 642,
name: "thundurus-incarnate",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 643,
name: "reshiram",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 644,
name: "zekrom",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 645,
name: "landorus-incarnate",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 646,
name: "kyurem",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 647,
name: "keldeo-ordinary",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 648,
name: "meloetta-aria",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 649,
name: "genesect",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 650,
name: "chespin",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 651,
name: "quilladin",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 652,
name: "chesnaught",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 653,
name: "fennekin",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 654,
name: "braixen",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 655,
name: "delphox",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 656,
name: "froakie",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 657,
name: "frogadier",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 658,
name: "greninja",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 659,
name: "bunnelby",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 660,
name: "diggersby",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 661,
name: "fletchling",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 662,
name: "fletchinder",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 663,
name: "talonflame",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 664,
name: "scatterbug",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 665,
name: "spewpa",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 666,
name: "vivillon",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 667,
name: "litleo",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 668,
name: "pyroar",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 669,
name: "flabebe",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 670,
name: "floette",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 671,
name: "florges",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 672,
name: "skiddo",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 673,
name: "gogoat",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 674,
name: "pancham",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 675,
name: "pangoro",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 676,
name: "furfrou",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 677,
name: "espurr",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 678,
name: "meowstic-male",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 679,
name: "honedge",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 680,
name: "doublade",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 681,
name: "aegislash-shield",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 682,
name: "spritzee",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 683,
name: "aromatisse",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 684,
name: "swirlix",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 685,
name: "slurpuff",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 686,
name: "inkay",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 687,
name: "malamar",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 688,
name: "binacle",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 689,
name: "barbaracle",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 690,
name: "skrelp",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 691,
name: "dragalge",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 692,
name: "clauncher",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 693,
name: "clawitzer",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 694,
name: "helioptile",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 695,
name: "heliolisk",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 696,
name: "tyrunt",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 697,
name: "tyrantrum",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 698,
name: "amaura",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 699,
name: "aurorus",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 700,
name: "sylveon",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 701,
name: "hawlucha",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 702,
name: "dedenne",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 703,
name: "carbink",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 704,
name: "goomy",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 705,
name: "sliggoo",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 706,
name: "goodra",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 707,
name: "klefki",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 708,
name: "phantump",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 709,
name: "trevenant",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 710,
name: "pumpkaboo-average",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 711,
name: "gourgeist-average",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 712,
name: "bergmite",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 713,
name: "avalugg",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 714,
name: "noibat",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 715,
name: "noivern",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 716,
name: "xerneas",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 717,
name: "yveltal",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 718,
name: "zygarde",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 719,
name: "diancie",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 720,
name: "hoopa",
createdAt: new Date(),
updatedAt: new Date()},
{
dex: 721,
name: "volcanion",
createdAt: new Date(),
updatedAt: new Date()}
], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
