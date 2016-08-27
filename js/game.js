'use strict'

var interval;

var calamities = {
  1: {
    name: 'escalator',
    passengerReduction: 5,
    timeToFix: 2,
    message: 'An escalator is malfunctioning',
  },
  2: {
    name: 'elevator',
    passengerReduction: 10,
    timeToFix: 2,
    message: 'An elevator is malfunctioning',
  },
  3: {
    name: 'smoke',
    passengerReduction: 5,
    timeToFix: 5,
    message: 'Smoke has filled the station',
  },
  4: {
    name: 'fire',
    passengerReduction: 100,
    timeToFix: 10,
    message: 'A fire has broken out',
  },
  5: {
    name: 'flood',
    passengerReduction: 100,
    timeToFix: 15,
    message: 'Flooding reported',
  },
  6: {
    name: 'violence',
    passengerReduction: 70,
    timeToFix: 3,
    message: 'Violent incident reported',
  },
  7: {
    name: 'suicide',
    passengerReduction: 50,
    timeToFix: 5,
    message: 'An individual was struck by a train',
  },
  8: {
    name: 'derailment',
    passengerReduction: 90,
    timeToFix: 15,
    message: 'A train has derailed',
  },
  9: {
    name: 'crash',
    passengerReduction: 90,
    timeToFix: 18,
    message: 'Two trains have crashed',
  },
};

var stations = {
  1: {
    name: 'Glenmont',
    lines: ['red'],
  },
  2: {
    name: 'Shady Grove',
    lines: ['red'],
  },
  3: {
    name: 'Wheaton',
    lines: ['red'],
  },
  4: {
    name: 'Rockville',
    lines: ['red'],
  },
  5: {
    name: 'Forest Glen',
    lines: ['red'],
  },
  6: {
    name: 'Twinbrook',
    lines: ['red'],
  },
  7: {
    name: 'Silver Spring',
    lines: ['red'],
  },
  8: {
    name: 'Greenbelt',
    lines: ['green'],
  },
  9: {
    name: 'White Flint',
    lines: ['red'],
  },
  10: {
    name: 'Takoma',
    lines: ['red'],
  },
  11: {
    name: 'College Park-U of Md.',
    lines: ['green'],
  },
  12: {
    name: 'Grosvenor-Strathmore',
    lines: ['red'],
  },
  13: {
    name: 'Price George\'s Plaza',
    lines: ['green'],
  },
  14: {
    name: 'Medical Center',
    lines: ['red'],
  },
  15: {
    name: 'West Hyattsville',
    lines: ['green'],
  },
  16: {
    name: 'Bethesda',
    lines: ['red'],
  },
  17: {
    name: 'Fort Totten',
    lines: ['green', 'red'],
  },
  18: {
    name: 'Friendship Heights',
    lines: ['red'],
  },
  19: {
    name: 'Tenleytown-AU',
    lines: ['red'],
  },
  20: {
    name: 'Georgia Ave-Petworth',
    lines: ['green', 'yellow'],
  },
  21: {
    name: 'Van Ness-UDC',
    lines: ['red'],
  },
  22: {
    name: 'Brookland-CUA',
    lines: ['red'],
  },
  23: {
    name: 'Cleveland Park',
    lines: ['red'],
  },
  24: {
    name: 'Columbia Heights',
    lines: ['green', 'yellow'],
  },
  25: {
    name: 'Woodley Park',
    lines: ['red'],
  },
  26: {
    name: 'Dupont Circle',
    lines: ['red'],
  },
  27: {
    name: 'U Street',
    lines: ['green', 'yellow'],
  },
  28: {
    name: 'Rhode Island Avenue-Brentwood',
    lines: ['red'],
  },
  29: {
    name: 'Wiehle-Reston East',
    lines: ['silver'],
  },
  30: {
    name: 'New Carrolton',
    lines: ['orange'],
  },
  31: {
    name: 'Spring Hill',
    lines: ['silver'],
  },
  32: {
    name: 'Farragut North',
    lines: ['red'],
  },
  33: {
    name: 'Shaw-Howard U',
    lines: ['green', 'yellow'],
  },
  34: {
    name: 'Greensboro',
    lines: ['silver'],
  },
  35: {
    name: 'Foggy Bottom-GWU',
    lines: ['blue', 'orange', 'silver'],
  },
  36: {
    name: 'Farragut West',
    lines: ['blue', 'orange', 'silver'],
  },
  37: {
    name: 'McPherson Sq',
    lines: ['blue', 'orange', 'silver'],
  },
  38: {
    name: 'Landover',
    lines: ['orange'],
  },
  39: {
    name: 'Tysons Corner',
    lines: ['silver'],
  },
  40: {
    name: 'Mt Vernon Sq',
    lines: ['green', 'yellow'],
  },
  41: {
    name: 'NoMa-Gallaudet U',
    lines: ['red'],
  },
  42: {
    name: 'McLean',
    lines: ['silver'],
  },
  43: {
    name: 'Cheverly',
    lines: ['orange'],
  },
  44: {
    name: 'Rosslyn',
    lines: ['blue', 'orange', 'silver'],
  },
  45: {
    name: 'Deanwood',
    lines: ['orange'],
  },
  46: {
    name: 'Metro Center',
    lines: ['blue', 'orange', 'red', 'silver'],
  },
  47: {
    name: 'Gallery Place-Chinatown',
    lines: ['green', 'red', 'yellow'],
  },
  48: {
    name: 'Judiciary Sq',
    lines: ['red'],
  },
  49: {
    name: 'Union Station',
    lines: ['red'],
  },
  50: {
    name: 'East Falls Church',
    lines: ['orange', 'silver'],
  },
  51: {
    name: 'Ballston-MU',
    lines: ['orange', 'silver'],
  },
  52: {
    name: 'Virginia Sq-GMU',
    lines: ['orange', 'silver'],
  },
  53: {
    name: 'Clarendon',
    lines: ['orange', 'silver'],
  },
  54: {
    name: 'Court House',
    lines: ['orange', 'silver'],
  },
  55: {
    name: 'Minnesota Avenue',
    lines: ['orange'],
  },
  56: {
    name: 'Vienna-Fairfax',
    lines: ['orange'],
  },
  57: {
    name: 'Dunn Loring-Merrifield',
    lines: ['orange'],
  },
  58: {
    name: 'West Falls Church',
    lines: ['orange'],
  },
  59: {
    name: 'Federal Triangle',
    lines: ['blue', 'orange', 'silver'],
  },
  60: {
    name: 'Archives',
    lines: ['green', 'yellow'],
  },
  61: {
    name: 'Stadium-Armory',
    lines: ['blue', 'orange', 'silver'],
  },
  62: {
    name: 'Smithsonian',
    lines: ['blue', 'orange', 'silver'],
  },
  63: {
    name: 'Potomac Avenue',
    lines: ['blue', 'orange', 'silver'],
  },
  64: {
    name: 'Benning Road',
    lines: ['blue', 'silver'],
  },
  65: {
    name: 'Capitol Heights',
    lines: ['blue', 'silver'],
  },
  66: {
    name: 'Addison Road',
    lines: ['blue', 'silver'],
  },
  67: {
    name: 'Morgan Boulevard',
    lines: ['blue', 'silver'],
  },
  68: {
    name: 'Largo Town Center',
    lines: ['blue', 'silver'],
  },
  69: {
    name: 'Arlington Cemetary',
    lines: ['blue'],
  },
  70: {
    name: 'L\'Enfant Plaza',
    lines: ['blue', 'green', 'orange', 'silver', 'yellow'],
  },
  71: {
    name: 'Federal Center SW',
    lines: ['blue', 'orange', 'silver'],
  },
  72: {
    name: 'Capitol South',
    lines: ['blue', 'orange', 'silver'],
  },
  73: {
    name: 'Eastern Market',
    lines: ['blue', 'orange', 'silver'],
  },
  74: {
    name: 'Pentagon',
    lines: ['blue', 'yellow'],
  },
  75: {
    name: 'Waterfront',
    lines: ['green'],
  },
  76: {
    name: 'Navy Yard-Ballpark',
    lines: ['green'],
  },
  77: {
    name: 'Anacostia',
    lines: ['green'],
  },
  78: {
    name: 'Pentagon City',
    lines: ['blue', 'yellow'],
  },
  79: {
    name: 'Congress Heights',
    lines: ['green'],
  },
  80: {
    name: 'Southern Avenue',
    lines: ['green'],
  },
  81: {
    name: 'Crystal City',
    lines: ['blue', 'yellow'],
  },
  82: {
    name: 'Naylor Road',
    lines: ['green'],
  },
  83: {
    name: 'Ronald Reagan Washington National Airport',
    lines: ['blue', 'yellow'],
  },
  84: {
    name: 'Suitland',
    lines: ['green'],
  },
  85: {
    name: 'Braddock Road',
    lines: ['blue', 'yellow'],
  },
  86: {
    name: 'Branch Avenue',
    lines: ['green'],
  },
  87: {
    name: 'King St-Old Town',
    lines: ['blue', 'yellow'],
  },
  88: {
    name: 'Van Dorn Street',
    lines: ['blue'],
  },
  89: {
    name: 'Eisenhowever Avenue',
    lines: ['yellow'],
  },
  90: {
    name: 'Franconia-Springfield',
    lines: ['blue'],
  },
  91: {
    name: 'Huntington',
    lines: ['yellow'],
  },
};

var utils = {
  getRandomIntInclusive: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
};

var game = {
  init: function () {
    game.update();
    interval = setInterval(function () { game.update(); }, game.constants.cycleTime);
  },

  state: {
    afflictions: [],
    afflictionCount: 0,
    lineThroughput: {
      blue: 100,
      green: 100,
      orange: 100,
      red: 100,
      silver: 100,
      yellow: 100,
    },
    day: 0,
    hour: 0,
    repairCrewsAvailable: 10,
  },

  constants: {
    calamityOdds: .2,
    cycleTime: 900,
    dayLength: 18,
    hours: {
      0: '06:00AM',
      1: '07:00AM',
      2: '08:00AM',
      3: '09:00AM',
      4: '10:00AM',
      5: '11:00AM',
      6: '12:00AM',
      7: '01:00PM',
      8: '02:00PM',
      9: '03:00PM',
      10: '04:00PM',
      11: '05:00PM',
      12: '06:00PM',
      13: '07:00PM',
      14: '08:00PM',
      15: '09:00PM',
      16: '10:00PM',
      17: '11:00PM',
      18: '12:00PM',
    },
    hourDisplay: document.getElementById('hour'),
    dayDisplay: document.getElementById('day'),
  },

  update: function () {
    game.checkAfflictions();
    game.updateTime();
    game.rollTheDice();
  },

  checkAfflictions: function () {

  },

  updateTime: function () {
    game.constants.dayDisplay.innerHTML = game.state.day;
    game.constants.hourDisplay.innerHTML = game.constants.hours[game.state.hour];
    if (game.state.hour < 18) {
      game.state.hour += 1;
    } else {
      game.state.hour = 0;
      game.state.day += 1;
    }
  },

  rollTheDice: function () {
    if (Math.random() < game.constants.calamityOdds) {
      game.calamity();
    }
  },

  calamity: function () {
    var thisCalamity = utils.getRandomIntInclusive(1, 9),
        thisStation = utils.getRandomIntInclusive(1, 91);
    var theCalamity = calamities[thisCalamity],
        theStation = stations[thisStation];

    // Add affliction to the list of afflictions
    game.state.afflictionCount++;
    game.state.afflictions[game.state.afflictionCount] = {
      type: thisCalamity,
      station: thisStation,
      reduction: theCalamity.passengerReduction,
      linesAffected: theStation.lines,
    };

    document.getElementById(thisStation).setAttribute('class', 'station afflicted');
    document.getElementById(thisStation)
      .setAttribute(
        'onclick',
        'game.assignCrew(' + thisStation + ', ' + game.state.afflictionCount + ')'
      );

    // Update line throughput
    theStation.lines.forEach(function (line) {
      game.state.lineThroughput[line] -= theCalamity.passengerReduction;
      console.log(game.state.lineThroughput[line]);
      if (game.state.lineThroughput[line] < 0) {
        document.getElementById(line).innerHTML = 0;
      } else {
        document.getElementById(line).innerHTML = game.state.lineThroughput[line];
      }
    });

    // Debug in console
    // TODO remove when finished
    console.log(calamities[thisCalamity].message
      + ' at ' + stations[thisStation].name
      + ' at day ' + game.state.day
      + ' at ' + game.constants.hours[game.state.hour]);
  },

  assignCrew: function (station, id) {
    if (game.state.repairCrewsAvailable === 0) {
      console.log('No crews to repair station.');
      return;
    }

    var affliction = game.state.afflictions[id];
    var timeToFix = calamities[affliction.type].timeToFix;
    game.state.repairCrewsAvailable--;
    console.log('Assigning crew...');
    document.getElementById(station).setAttribute('onclick', '');
    document.getElementById(station).setAttribute('class', 'station repairing');

    setTimeout(function () {
      affliction.linesAffected.forEach(function (line) {
        game.state.lineThroughput[line] += affliction.reduction;
      });

      game.state.repairCrewsAvailable++;
      document.getElementById(station).setAttribute('class', 'station');

      delete game.state.afflictions[id];
    }, timeToFix);
  },
};

game.init();
