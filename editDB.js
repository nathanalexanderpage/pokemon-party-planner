'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('pokes', [
{
dex: 1,
name: "bulbasaur"
},
{
dex: 2,
name: "ivysaur"
},
{
dex: 3,
name: "venusaur"
},
{
dex: 4,
name: "charmander"
},
{
dex: 5,
name: "charmeleon"
},
{
dex: 6,
name: "charizard"
},
{
dex: 7,
name: "squirtle"
},
{
dex: 8,
name: "wartortle"
},
{
dex: 9,
name: "blastoise"
},
{
dex: 10,
name: "caterpie"
},
{
dex: 11,
name: "metapod"
},
{
dex: 12,
name: "butterfree"
},
{
dex: 13,
name: "weedle"
},
{
dex: 14,
name: "kakuna"
},
{
dex: 15,
name: "beedrill"
},
{
dex: 16,
name: "pidgey"
},
{
dex: 17,
name: "pidgeotto"
},
{
dex: 18,
name: "pidgeot"
},
{
dex: 19,
name: "rattata"
},
{
dex: 20,
name: "raticate"
},
{
dex: 21,
name: "spearow"
},
{
dex: 22,
name: "fearow"
},
{
dex: 23,
name: "ekans"
},
{
dex: 24,
name: "arbok"
},
{
dex: 25,
name: "pikachu"
},
{
dex: 26,
name: "raichu"
},
{
dex: 27,
name: "sandshrew"
},
{
dex: 28,
name: "sandslash"
},
{
dex: 29,
name: "nidoran-f"
},
{
dex: 30,
name: "nidorina"
},
{
dex: 31,
name: "nidoqueen"
},
{
dex: 32,
name: "nidoran-m"
},
{
dex: 33,
name: "nidorino"
},
{
dex: 34,
name: "nidoking"
},
{
dex: 35,
name: "clefairy"
},
{
dex: 36,
name: "clefable"
},
{
dex: 37,
name: "vulpix"
},
{
dex: 38,
name: "ninetales"
},
{
dex: 39,
name: "jigglypuff"
},
{
dex: 40,
name: "wigglytuff"
},
{
dex: 41,
name: "zubat"
},
{
dex: 42,
name: "golbat"
},
{
dex: 43,
name: "oddish"
},
{
dex: 44,
name: "gloom"
},
{
dex: 45,
name: "vileplume"
},
{
dex: 46,
name: "paras"
},
{
dex: 47,
name: "parasect"
},
{
dex: 48,
name: "venonat"
},
{
dex: 49,
name: "venomoth"
},
{
dex: 50,
name: "diglett"
},
{
dex: 51,
name: "dugtrio"
},
{
dex: 52,
name: "meowth"
},
{
dex: 53,
name: "persian"
},
{
dex: 54,
name: "psyduck"
},
{
dex: 55,
name: "golduck"
},
{
dex: 56,
name: "mankey"
},
{
dex: 57,
name: "primeape"
},
{
dex: 58,
name: "growlithe"
},
{
dex: 59,
name: "arcanine"
},
{
dex: 60,
name: "poliwag"
},
{
dex: 61,
name: "poliwhirl"
},
{
dex: 62,
name: "poliwrath"
},
{
dex: 63,
name: "abra"
},
{
dex: 64,
name: "kadabra"
},
{
dex: 65,
name: "alakazam"
},
{
dex: 66,
name: "machop"
},
{
dex: 67,
name: "machoke"
},
{
dex: 68,
name: "machamp"
},
{
dex: 69,
name: "bellsprout"
},
{
dex: 70,
name: "weepinbell"
},
{
dex: 71,
name: "victreebel"
},
{
dex: 72,
name: "tentacool"
},
{
dex: 73,
name: "tentacruel"
},
{
dex: 74,
name: "geodude"
},
{
dex: 75,
name: "graveler"
},
{
dex: 76,
name: "golem"
},
{
dex: 77,
name: "ponyta"
},
{
dex: 78,
name: "rapidash"
},
{
dex: 79,
name: "slowpoke"
},
{
dex: 80,
name: "slowbro"
},
{
dex: 81,
name: "magnemite"
},
{
dex: 82,
name: "magneton"
},
{
dex: 83,
name: "farfetchd"
},
{
dex: 84,
name: "doduo"
},
{
dex: 85,
name: "dodrio"
},
{
dex: 86,
name: "seel"
},
{
dex: 87,
name: "dewgong"
},
{
dex: 88,
name: "grimer"
},
{
dex: 89,
name: "muk"
},
{
dex: 90,
name: "shellder"
},
{
dex: 91,
name: "cloyster"
},
{
dex: 92,
name: "gastly"
},
{
dex: 93,
name: "haunter"
},
{
dex: 94,
name: "gengar"
},
{
dex: 95,
name: "onix"
},
{
dex: 96,
name: "drowzee"
},
{
dex: 97,
name: "hypno"
},
{
dex: 98,
name: "krabby"
},
{
dex: 99,
name: "kingler"
},
{
dex: 100,
name: "voltorb"
},
{
dex: 101,
name: "electrode"
},
{
dex: 102,
name: "exeggcute"
},
{
dex: 103,
name: "exeggutor"
},
{
dex: 104,
name: "cubone"
},
{
dex: 105,
name: "marowak"
},
{
dex: 106,
name: "hitmonlee"
},
{
dex: 107,
name: "hitmonchan"
},
{
dex: 108,
name: "lickitung"
},
{
dex: 109,
name: "koffing"
},
{
dex: 110,
name: "weezing"
},
{
dex: 111,
name: "rhyhorn"
},
{
dex: 112,
name: "rhydon"
},
{
dex: 113,
name: "chansey"
},
{
dex: 114,
name: "tangela"
},
{
dex: 115,
name: "kangaskhan"
},
{
dex: 116,
name: "horsea"
},
{
dex: 117,
name: "seadra"
},
{
dex: 118,
name: "goldeen"
},
{
dex: 119,
name: "seaking"
},
{
dex: 120,
name: "staryu"
},
{
dex: 121,
name: "starmie"
},
{
dex: 122,
name: "mr-mime"
},
{
dex: 123,
name: "scyther"
},
{
dex: 124,
name: "jynx"
},
{
dex: 125,
name: "electabuzz"
},
{
dex: 126,
name: "magmar"
},
{
dex: 127,
name: "pinsir"
},
{
dex: 128,
name: "tauros"
},
{
dex: 129,
name: "magikarp"
},
{
dex: 130,
name: "gyarados"
},
{
dex: 131,
name: "lapras"
},
{
dex: 132,
name: "ditto"
},
{
dex: 133,
name: "eevee"
},
{
dex: 134,
name: "vaporeon"
},
{
dex: 135,
name: "jolteon"
},
{
dex: 136,
name: "flareon"
},
{
dex: 137,
name: "porygon"
},
{
dex: 138,
name: "omanyte"
},
{
dex: 139,
name: "omastar"
},
{
dex: 140,
name: "kabuto"
},
{
dex: 141,
name: "kabutops"
},
{
dex: 142,
name: "aerodactyl"
},
{
dex: 143,
name: "snorlax"
},
{
dex: 144,
name: "articuno"
},
{
dex: 145,
name: "zapdos"
},
{
dex: 146,
name: "moltres"
},
{
dex: 147,
name: "dratini"
},
{
dex: 148,
name: "dragonair"
},
{
dex: 149,
name: "dragonite"
},
{
dex: 150,
name: "mewtwo"
},
{
dex: 151,
name: "mew"
},
{
dex: 152,
name: "chikorita"
},
{
dex: 153,
name: "bayleef"
},
{
dex: 154,
name: "meganium"
},
{
dex: 155,
name: "cyndaquil"
},
{
dex: 156,
name: "quilava"
},
{
dex: 157,
name: "typhlosion"
},
{
dex: 158,
name: "totodile"
},
{
dex: 159,
name: "croconaw"
},
{
dex: 160,
name: "feraligatr"
},
{
dex: 161,
name: "sentret"
},
{
dex: 162,
name: "furret"
},
{
dex: 163,
name: "hoothoot"
},
{
dex: 164,
name: "noctowl"
},
{
dex: 165,
name: "ledyba"
},
{
dex: 166,
name: "ledian"
},
{
dex: 167,
name: "spinarak"
},
{
dex: 168,
name: "ariados"
},
{
dex: 169,
name: "crobat"
},
{
dex: 170,
name: "chinchou"
},
{
dex: 171,
name: "lanturn"
},
{
dex: 172,
name: "pichu"
},
{
dex: 173,
name: "cleffa"
},
{
dex: 174,
name: "igglybuff"
},
{
dex: 175,
name: "togepi"
},
{
dex: 176,
name: "togetic"
},
{
dex: 177,
name: "natu"
},
{
dex: 178,
name: "xatu"
},
{
dex: 179,
name: "mareep"
},
{
dex: 180,
name: "flaaffy"
},
{
dex: 181,
name: "ampharos"
},
{
dex: 182,
name: "bellossom"
},
{
dex: 183,
name: "marill"
},
{
dex: 184,
name: "azumarill"
},
{
dex: 185,
name: "sudowoodo"
},
{
dex: 186,
name: "politoed"
},
{
dex: 187,
name: "hoppip"
},
{
dex: 188,
name: "skiploom"
},
{
dex: 189,
name: "jumpluff"
},
{
dex: 190,
name: "aipom"
},
{
dex: 191,
name: "sunkern"
},
{
dex: 192,
name: "sunflora"
},
{
dex: 193,
name: "yanma"
},
{
dex: 194,
name: "wooper"
},
{
dex: 195,
name: "quagsire"
},
{
dex: 196,
name: "espeon"
},
{
dex: 197,
name: "umbreon"
},
{
dex: 198,
name: "murkrow"
},
{
dex: 199,
name: "slowking"
},
{
dex: 200,
name: "misdreavus"
},
{
dex: 201,
name: "unown"
},
{
dex: 202,
name: "wobbuffet"
},
{
dex: 203,
name: "girafarig"
},
{
dex: 204,
name: "pineco"
},
{
dex: 205,
name: "forretress"
},
{
dex: 206,
name: "dunsparce"
},
{
dex: 207,
name: "gligar"
},
{
dex: 208,
name: "steelix"
},
{
dex: 209,
name: "snubbull"
},
{
dex: 210,
name: "granbull"
},
{
dex: 211,
name: "qwilfish"
},
{
dex: 212,
name: "scizor"
},
{
dex: 213,
name: "shuckle"
},
{
dex: 214,
name: "heracross"
},
{
dex: 215,
name: "sneasel"
},
{
dex: 216,
name: "teddiursa"
},
{
dex: 217,
name: "ursaring"
},
{
dex: 218,
name: "slugma"
},
{
dex: 219,
name: "magcargo"
},
{
dex: 220,
name: "swinub"
},
{
dex: 221,
name: "piloswine"
},
{
dex: 222,
name: "corsola"
},
{
dex: 223,
name: "remoraid"
},
{
dex: 224,
name: "octillery"
},
{
dex: 225,
name: "delibird"
},
{
dex: 226,
name: "mantine"
},
{
dex: 227,
name: "skarmory"
},
{
dex: 228,
name: "houndour"
},
{
dex: 229,
name: "houndoom"
},
{
dex: 230,
name: "kingdra"
},
{
dex: 231,
name: "phanpy"
},
{
dex: 232,
name: "donphan"
},
{
dex: 233,
name: "porygon2"
},
{
dex: 234,
name: "stantler"
},
{
dex: 235,
name: "smeargle"
},
{
dex: 236,
name: "tyrogue"
},
{
dex: 237,
name: "hitmontop"
},
{
dex: 238,
name: "smoochum"
},
{
dex: 239,
name: "elekid"
},
{
dex: 240,
name: "magby"
},
{
dex: 241,
name: "miltank"
},
{
dex: 242,
name: "blissey"
},
{
dex: 243,
name: "raikou"
},
{
dex: 244,
name: "entei"
},
{
dex: 245,
name: "suicune"
},
{
dex: 246,
name: "larvitar"
},
{
dex: 247,
name: "pupitar"
},
{
dex: 248,
name: "tyranitar"
},
{
dex: 249,
name: "lugia"
},
{
dex: 250,
name: "ho-oh"
},
{
dex: 251,
name: "celebi"
},
{
dex: 252,
name: "treecko"
},
{
dex: 253,
name: "grovyle"
},
{
dex: 254,
name: "sceptile"
},
{
dex: 255,
name: "torchic"
},
{
dex: 256,
name: "combusken"
},
{
dex: 257,
name: "blaziken"
},
{
dex: 258,
name: "mudkip"
},
{
dex: 259,
name: "marshtomp"
},
{
dex: 260,
name: "swampert"
},
{
dex: 261,
name: "poochyena"
},
{
dex: 262,
name: "mightyena"
},
{
dex: 263,
name: "zigzagoon"
},
{
dex: 264,
name: "linoone"
},
{
dex: 265,
name: "wurmple"
},
{
dex: 266,
name: "silcoon"
},
{
dex: 267,
name: "beautifly"
},
{
dex: 268,
name: "cascoon"
},
{
dex: 269,
name: "dustox"
},
{
dex: 270,
name: "lotad"
},
{
dex: 271,
name: "lombre"
},
{
dex: 272,
name: "ludicolo"
},
{
dex: 273,
name: "seedot"
},
{
dex: 274,
name: "nuzleaf"
},
{
dex: 275,
name: "shiftry"
},
{
dex: 276,
name: "taillow"
},
{
dex: 277,
name: "swellow"
},
{
dex: 278,
name: "wingull"
},
{
dex: 279,
name: "pelipper"
},
{
dex: 280,
name: "ralts"
},
{
dex: 281,
name: "kirlia"
},
{
dex: 282,
name: "gardevoir"
},
{
dex: 283,
name: "surskit"
},
{
dex: 284,
name: "masquerain"
},
{
dex: 285,
name: "shroomish"
},
{
dex: 286,
name: "breloom"
},
{
dex: 287,
name: "slakoth"
},
{
dex: 288,
name: "vigoroth"
},
{
dex: 289,
name: "slaking"
},
{
dex: 290,
name: "nincada"
},
{
dex: 291,
name: "ninjask"
},
{
dex: 292,
name: "shedinja"
},
{
dex: 293,
name: "whismur"
},
{
dex: 294,
name: "loudred"
},
{
dex: 295,
name: "exploud"
},
{
dex: 296,
name: "makuhita"
},
{
dex: 297,
name: "hariyama"
},
{
dex: 298,
name: "azurill"
},
{
dex: 299,
name: "nosepass"
},
{
dex: 300,
name: "skitty"
},
{
dex: 301,
name: "delcatty"
},
{
dex: 302,
name: "sableye"
},
{
dex: 303,
name: "mawile"
},
{
dex: 304,
name: "aron"
},
{
dex: 305,
name: "lairon"
},
{
dex: 306,
name: "aggron"
},
{
dex: 307,
name: "meditite"
},
{
dex: 308,
name: "medicham"
},
{
dex: 309,
name: "electrike"
},
{
dex: 310,
name: "manectric"
},
{
dex: 311,
name: "plusle"
},
{
dex: 312,
name: "minun"
},
{
dex: 313,
name: "volbeat"
},
{
dex: 314,
name: "illumise"
},
{
dex: 315,
name: "roselia"
},
{
dex: 316,
name: "gulpin"
},
{
dex: 317,
name: "swalot"
},
{
dex: 318,
name: "carvanha"
},
{
dex: 319,
name: "sharpedo"
},
{
dex: 320,
name: "wailmer"
},
{
dex: 321,
name: "wailord"
},
{
dex: 322,
name: "numel"
},
{
dex: 323,
name: "camerupt"
},
{
dex: 324,
name: "torkoal"
},
{
dex: 325,
name: "spoink"
},
{
dex: 326,
name: "grumpig"
},
{
dex: 327,
name: "spinda"
},
{
dex: 328,
name: "trapinch"
},
{
dex: 329,
name: "vibrava"
},
{
dex: 330,
name: "flygon"
},
{
dex: 331,
name: "cacnea"
},
{
dex: 332,
name: "cacturne"
},
{
dex: 333,
name: "swablu"
},
{
dex: 334,
name: "altaria"
},
{
dex: 335,
name: "zangoose"
},
{
dex: 336,
name: "seviper"
},
{
dex: 337,
name: "lunatone"
},
{
dex: 338,
name: "solrock"
},
{
dex: 339,
name: "barboach"
},
{
dex: 340,
name: "whiscash"
},
{
dex: 341,
name: "corphish"
},
{
dex: 342,
name: "crawdaunt"
},
{
dex: 343,
name: "baltoy"
},
{
dex: 344,
name: "claydol"
},
{
dex: 345,
name: "lileep"
},
{
dex: 346,
name: "cradily"
},
{
dex: 347,
name: "anorith"
},
{
dex: 348,
name: "armaldo"
},
{
dex: 349,
name: "feebas"
},
{
dex: 350,
name: "milotic"
},
{
dex: 351,
name: "castform"
},
{
dex: 352,
name: "kecleon"
},
{
dex: 353,
name: "shuppet"
},
{
dex: 354,
name: "banette"
},
{
dex: 355,
name: "duskull"
},
{
dex: 356,
name: "dusclops"
},
{
dex: 357,
name: "tropius"
},
{
dex: 358,
name: "chimecho"
},
{
dex: 359,
name: "absol"
},
{
dex: 360,
name: "wynaut"
},
{
dex: 361,
name: "snorunt"
},
{
dex: 362,
name: "glalie"
},
{
dex: 363,
name: "spheal"
},
{
dex: 364,
name: "sealeo"
},
{
dex: 365,
name: "walrein"
},
{
dex: 366,
name: "clamperl"
},
{
dex: 367,
name: "huntail"
},
{
dex: 368,
name: "gorebyss"
},
{
dex: 369,
name: "relicanth"
},
{
dex: 370,
name: "luvdisc"
},
{
dex: 371,
name: "bagon"
},
{
dex: 372,
name: "shelgon"
},
{
dex: 373,
name: "salamence"
},
{
dex: 374,
name: "beldum"
},
{
dex: 375,
name: "metang"
},
{
dex: 376,
name: "metagross"
},
{
dex: 377,
name: "regirock"
},
{
dex: 378,
name: "regice"
},
{
dex: 379,
name: "registeel"
},
{
dex: 380,
name: "latias"
},
{
dex: 381,
name: "latios"
},
{
dex: 382,
name: "kyogre"
},
{
dex: 383,
name: "groudon"
},
{
dex: 384,
name: "rayquaza"
},
{
dex: 385,
name: "jirachi"
},
{
dex: 386,
name: "deoxys-normal"
},
{
dex: 387,
name: "turtwig"
},
{
dex: 388,
name: "grotle"
},
{
dex: 389,
name: "torterra"
},
{
dex: 390,
name: "chimchar"
},
{
dex: 391,
name: "monferno"
},
{
dex: 392,
name: "infernape"
},
{
dex: 393,
name: "piplup"
},
{
dex: 394,
name: "prinplup"
},
{
dex: 395,
name: "empoleon"
},
{
dex: 396,
name: "starly"
},
{
dex: 397,
name: "staravia"
},
{
dex: 398,
name: "staraptor"
},
{
dex: 399,
name: "bidoof"
},
{
dex: 400,
name: "bibarel"
},
{
dex: 401,
name: "kricketot"
},
{
dex: 402,
name: "kricketune"
},
{
dex: 403,
name: "shinx"
},
{
dex: 404,
name: "luxio"
},
{
dex: 405,
name: "luxray"
},
{
dex: 406,
name: "budew"
},
{
dex: 407,
name: "roserade"
},
{
dex: 408,
name: "cranidos"
},
{
dex: 409,
name: "rampardos"
},
{
dex: 410,
name: "shieldon"
},
{
dex: 411,
name: "bastiodon"
},
{
dex: 412,
name: "burmy"
},
{
dex: 413,
name: "wormadam-plant"
},
{
dex: 414,
name: "mothim"
},
{
dex: 415,
name: "combee"
},
{
dex: 416,
name: "vespiquen"
},
{
dex: 417,
name: "pachirisu"
},
{
dex: 418,
name: "buizel"
},
{
dex: 419,
name: "floatzel"
},
{
dex: 420,
name: "cherubi"
},
{
dex: 421,
name: "cherrim"
},
{
dex: 422,
name: "shellos"
},
{
dex: 423,
name: "gastrodon"
},
{
dex: 424,
name: "ambipom"
},
{
dex: 425,
name: "drifloon"
},
{
dex: 426,
name: "drifblim"
},
{
dex: 427,
name: "buneary"
},
{
dex: 428,
name: "lopunny"
},
{
dex: 429,
name: "mismagius"
},
{
dex: 430,
name: "honchkrow"
},
{
dex: 431,
name: "glameow"
},
{
dex: 432,
name: "purugly"
},
{
dex: 433,
name: "chingling"
},
{
dex: 434,
name: "stunky"
},
{
dex: 435,
name: "skuntank"
},
{
dex: 436,
name: "bronzor"
},
{
dex: 437,
name: "bronzong"
},
{
dex: 438,
name: "bonsly"
},
{
dex: 439,
name: "mime-jr"
},
{
dex: 440,
name: "happiny"
},
{
dex: 441,
name: "chatot"
},
{
dex: 442,
name: "spiritomb"
},
{
dex: 443,
name: "gible"
},
{
dex: 444,
name: "gabite"
},
{
dex: 445,
name: "garchomp"
},
{
dex: 446,
name: "munchlax"
},
{
dex: 447,
name: "riolu"
},
{
dex: 448,
name: "lucario"
},
{
dex: 449,
name: "hippopotas"
},
{
dex: 450,
name: "hippowdon"
},
{
dex: 451,
name: "skorupi"
},
{
dex: 452,
name: "drapion"
},
{
dex: 453,
name: "croagunk"
},
{
dex: 454,
name: "toxicroak"
},
{
dex: 455,
name: "carnivine"
},
{
dex: 456,
name: "finneon"
},
{
dex: 457,
name: "lumineon"
},
{
dex: 458,
name: "mantyke"
},
{
dex: 459,
name: "snover"
},
{
dex: 460,
name: "abomasnow"
},
{
dex: 461,
name: "weavile"
},
{
dex: 462,
name: "magnezone"
},
{
dex: 463,
name: "lickilicky"
},
{
dex: 464,
name: "rhyperior"
},
{
dex: 465,
name: "tangrowth"
},
{
dex: 466,
name: "electivire"
},
{
dex: 467,
name: "magmortar"
},
{
dex: 468,
name: "togekiss"
},
{
dex: 469,
name: "yanmega"
},
{
dex: 470,
name: "leafeon"
},
{
dex: 471,
name: "glaceon"
},
{
dex: 472,
name: "gliscor"
},
{
dex: 473,
name: "mamoswine"
},
{
dex: 474,
name: "porygon-z"
},
{
dex: 475,
name: "gallade"
},
{
dex: 476,
name: "probopass"
},
{
dex: 477,
name: "dusknoir"
},
{
dex: 478,
name: "froslass"
},
{
dex: 479,
name: "rotom"
},
{
dex: 480,
name: "uxie"
},
{
dex: 481,
name: "mesprit"
},
{
dex: 482,
name: "azelf"
},
{
dex: 483,
name: "dialga"
},
{
dex: 484,
name: "palkia"
},
{
dex: 485,
name: "heatran"
},
{
dex: 486,
name: "regigigas"
},
{
dex: 487,
name: "giratina-altered"
},
{
dex: 488,
name: "cresselia"
},
{
dex: 489,
name: "phione"
},
{
dex: 490,
name: "manaphy"
},
{
dex: 491,
name: "darkrai"
},
{
dex: 492,
name: "shaymin-land"
},
{
dex: 493,
name: "arceus"
},
{
dex: 494,
name: "victini"
},
{
dex: 495,
name: "snivy"
},
{
dex: 496,
name: "servine"
},
{
dex: 497,
name: "serperior"
},
{
dex: 498,
name: "tepig"
},
{
dex: 499,
name: "pignite"
},
{
dex: 500,
name: "emboar"
},
{
dex: 501,
name: "oshawott"
},
{
dex: 502,
name: "dewott"
},
{
dex: 503,
name: "samurott"
},
{
dex: 504,
name: "patrat"
},
{
dex: 505,
name: "watchog"
},
{
dex: 506,
name: "lillipup"
},
{
dex: 507,
name: "herdier"
},
{
dex: 508,
name: "stoutland"
},
{
dex: 509,
name: "purrloin"
},
{
dex: 510,
name: "liepard"
},
{
dex: 511,
name: "pansage"
},
{
dex: 512,
name: "simisage"
},
{
dex: 513,
name: "pansear"
},
{
dex: 514,
name: "simisear"
},
{
dex: 515,
name: "panpour"
},
{
dex: 516,
name: "simipour"
},
{
dex: 517,
name: "munna"
},
{
dex: 518,
name: "musharna"
},
{
dex: 519,
name: "pidove"
},
{
dex: 520,
name: "tranquill"
},
{
dex: 521,
name: "unfezant"
},
{
dex: 522,
name: "blitzle"
},
{
dex: 523,
name: "zebstrika"
},
{
dex: 524,
name: "roggenrola"
},
{
dex: 525,
name: "boldore"
},
{
dex: 526,
name: "gigalith"
},
{
dex: 527,
name: "woobat"
},
{
dex: 528,
name: "swoobat"
},
{
dex: 529,
name: "drilbur"
},
{
dex: 530,
name: "excadrill"
},
{
dex: 531,
name: "audino"
},
{
dex: 532,
name: "timburr"
},
{
dex: 533,
name: "gurdurr"
},
{
dex: 534,
name: "conkeldurr"
},
{
dex: 535,
name: "tympole"
},
{
dex: 536,
name: "palpitoad"
},
{
dex: 537,
name: "seismitoad"
},
{
dex: 538,
name: "throh"
},
{
dex: 539,
name: "sawk"
},
{
dex: 540,
name: "sewaddle"
},
{
dex: 541,
name: "swadloon"
},
{
dex: 542,
name: "leavanny"
},
{
dex: 543,
name: "venipede"
},
{
dex: 544,
name: "whirlipede"
},
{
dex: 545,
name: "scolipede"
},
{
dex: 546,
name: "cottonee"
},
{
dex: 547,
name: "whimsicott"
},
{
dex: 548,
name: "petilil"
},
{
dex: 549,
name: "lilligant"
},
{
dex: 550,
name: "basculin-red-striped"
},
{
dex: 551,
name: "sandile"
},
{
dex: 552,
name: "krokorok"
},
{
dex: 553,
name: "krookodile"
},
{
dex: 554,
name: "darumaka"
},
{
dex: 555,
name: "darmanitan-standard"
},
{
dex: 556,
name: "maractus"
},
{
dex: 557,
name: "dwebble"
},
{
dex: 558,
name: "crustle"
},
{
dex: 559,
name: "scraggy"
},
{
dex: 560,
name: "scrafty"
},
{
dex: 561,
name: "sigilyph"
},
{
dex: 562,
name: "yamask"
},
{
dex: 563,
name: "cofagrigus"
},
{
dex: 564,
name: "tirtouga"
},
{
dex: 565,
name: "carracosta"
},
{
dex: 566,
name: "archen"
},
{
dex: 567,
name: "archeops"
},
{
dex: 568,
name: "trubbish"
},
{
dex: 569,
name: "garbodor"
},
{
dex: 570,
name: "zorua"
},
{
dex: 571,
name: "zoroark"
},
{
dex: 572,
name: "minccino"
},
{
dex: 573,
name: "cinccino"
},
{
dex: 574,
name: "gothita"
},
{
dex: 575,
name: "gothorita"
},
{
dex: 576,
name: "gothitelle"
},
{
dex: 577,
name: "solosis"
},
{
dex: 578,
name: "duosion"
},
{
dex: 579,
name: "reuniclus"
},
{
dex: 580,
name: "ducklett"
},
{
dex: 581,
name: "swanna"
},
{
dex: 582,
name: "vanillite"
},
{
dex: 583,
name: "vanillish"
},
{
dex: 584,
name: "vanilluxe"
},
{
dex: 585,
name: "deerling"
},
{
dex: 586,
name: "sawsbuck"
},
{
dex: 587,
name: "emolga"
},
{
dex: 588,
name: "karrablast"
},
{
dex: 589,
name: "escavalier"
},
{
dex: 590,
name: "foongus"
},
{
dex: 591,
name: "amoonguss"
},
{
dex: 592,
name: "frillish"
},
{
dex: 593,
name: "jellicent"
},
{
dex: 594,
name: "alomomola"
},
{
dex: 595,
name: "joltik"
},
{
dex: 596,
name: "galvantula"
},
{
dex: 597,
name: "ferroseed"
},
{
dex: 598,
name: "ferrothorn"
},
{
dex: 599,
name: "klink"
},
{
dex: 600,
name: "klang"
},
{
dex: 601,
name: "klinklang"
},
{
dex: 602,
name: "tynamo"
},
{
dex: 603,
name: "eelektrik"
},
{
dex: 604,
name: "eelektross"
},
{
dex: 605,
name: "elgyem"
},
{
dex: 606,
name: "beheeyem"
},
{
dex: 607,
name: "litwick"
},
{
dex: 608,
name: "lampent"
},
{
dex: 609,
name: "chandelure"
},
{
dex: 610,
name: "axew"
},
{
dex: 611,
name: "fraxure"
},
{
dex: 612,
name: "haxorus"
},
{
dex: 613,
name: "cubchoo"
},
{
dex: 614,
name: "beartic"
},
{
dex: 615,
name: "cryogonal"
},
{
dex: 616,
name: "shelmet"
},
{
dex: 617,
name: "accelgor"
},
{
dex: 618,
name: "stunfisk"
},
{
dex: 619,
name: "mienfoo"
},
{
dex: 620,
name: "mienshao"
},
{
dex: 621,
name: "druddigon"
},
{
dex: 622,
name: "golett"
},
{
dex: 623,
name: "golurk"
},
{
dex: 624,
name: "pawniard"
},
{
dex: 625,
name: "bisharp"
},
{
dex: 626,
name: "bouffalant"
},
{
dex: 627,
name: "rufflet"
},
{
dex: 628,
name: "braviary"
},
{
dex: 629,
name: "vullaby"
},
{
dex: 630,
name: "mandibuzz"
},
{
dex: 631,
name: "heatmor"
},
{
dex: 632,
name: "durant"
},
{
dex: 633,
name: "deino"
},
{
dex: 634,
name: "zweilous"
},
{
dex: 635,
name: "hydreigon"
},
{
dex: 636,
name: "larvesta"
},
{
dex: 637,
name: "volcarona"
},
{
dex: 638,
name: "cobalion"
},
{
dex: 639,
name: "terrakion"
},
{
dex: 640,
name: "virizion"
},
{
dex: 641,
name: "tornadus-incarnate"
},
{
dex: 642,
name: "thundurus-incarnate"
},
{
dex: 643,
name: "reshiram"
},
{
dex: 644,
name: "zekrom"
},
{
dex: 645,
name: "landorus-incarnate"
},
{
dex: 646,
name: "kyurem"
},
{
dex: 647,
name: "keldeo-ordinary"
},
{
dex: 648,
name: "meloetta-aria"
},
{
dex: 649,
name: "genesect"
},
{
dex: 650,
name: "chespin"
},
{
dex: 651,
name: "quilladin"
},
{
dex: 652,
name: "chesnaught"
},
{
dex: 653,
name: "fennekin"
},
{
dex: 654,
name: "braixen"
},
{
dex: 655,
name: "delphox"
},
{
dex: 656,
name: "froakie"
},
{
dex: 657,
name: "frogadier"
},
{
dex: 658,
name: "greninja"
},
{
dex: 659,
name: "bunnelby"
},
{
dex: 660,
name: "diggersby"
},
{
dex: 661,
name: "fletchling"
},
{
dex: 662,
name: "fletchinder"
},
{
dex: 663,
name: "talonflame"
},
{
dex: 664,
name: "scatterbug"
},
{
dex: 665,
name: "spewpa"
},
{
dex: 666,
name: "vivillon"
},
{
dex: 667,
name: "litleo"
},
{
dex: 668,
name: "pyroar"
},
{
dex: 669,
name: "flabebe"
},
{
dex: 670,
name: "floette"
},
{
dex: 671,
name: "florges"
},
{
dex: 672,
name: "skiddo"
},
{
dex: 673,
name: "gogoat"
},
{
dex: 674,
name: "pancham"
},
{
dex: 675,
name: "pangoro"
},
{
dex: 676,
name: "furfrou"
},
{
dex: 677,
name: "espurr"
},
{
dex: 678,
name: "meowstic-male"
},
{
dex: 679,
name: "honedge"
},
{
dex: 680,
name: "doublade"
},
{
dex: 681,
name: "aegislash-shield"
},
{
dex: 682,
name: "spritzee"
},
{
dex: 683,
name: "aromatisse"
},
{
dex: 684,
name: "swirlix"
},
{
dex: 685,
name: "slurpuff"
},
{
dex: 686,
name: "inkay"
},
{
dex: 687,
name: "malamar"
},
{
dex: 688,
name: "binacle"
},
{
dex: 689,
name: "barbaracle"
},
{
dex: 690,
name: "skrelp"
},
{
dex: 691,
name: "dragalge"
},
{
dex: 692,
name: "clauncher"
},
{
dex: 693,
name: "clawitzer"
},
{
dex: 694,
name: "helioptile"
},
{
dex: 695,
name: "heliolisk"
},
{
dex: 696,
name: "tyrunt"
},
{
dex: 697,
name: "tyrantrum"
},
{
dex: 698,
name: "amaura"
},
{
dex: 699,
name: "aurorus"
},
{
dex: 700,
name: "sylveon"
},
{
dex: 701,
name: "hawlucha"
},
{
dex: 702,
name: "dedenne"
},
{
dex: 703,
name: "carbink"
},
{
dex: 704,
name: "goomy"
},
{
dex: 705,
name: "sliggoo"
},
{
dex: 706,
name: "goodra"
},
{
dex: 707,
name: "klefki"
},
{
dex: 708,
name: "phantump"
},
{
dex: 709,
name: "trevenant"
},
{
dex: 710,
name: "pumpkaboo-average"
},
{
dex: 711,
name: "gourgeist-average"
},
{
dex: 712,
name: "bergmite"
},
{
dex: 713,
name: "avalugg"
},
{
dex: 714,
name: "noibat"
},
{
dex: 715,
name: "noivern"
},
{
dex: 716,
name: "xerneas"
},
{
dex: 717,
name: "yveltal"
},
{
dex: 718,
name: "zygarde"
},
{
dex: 719,
name: "diancie"
},
{
dex: 720,
name: "hoopa"
},
{
dex: 721,
name: "volcanion"
}
], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
