'use strict'

var calamities = {
  1: {
    name: 'escalator',
    passengerReduction: .05,
    timeToFix: 5,
    message: 'An escalator is malfunctioning',
  },
  2: {
    name: 'elevator',
    passengerReduction: .1,
    timeToFix: 5,
    message: 'An elevator is malfunctioning',
  },
  3: {
    name: 'smoke',
    passengerReduction: .5,
    timeToFix: 15,
    message: 'Smoke has filled the station',
  },
  4: {
    name: 'fire',
    passengerReduction: 1,
    timeToFix: 30,
    message: 'A fire has broken out',
  },
  5: {
    name: 'flood',
    passengerReduction: 1,
    timeToFix: 30,
    message: 'Flooding reported',
  },
  6: {
    name: 'violence',
    passengerReduction: .3,
    timeToFix: 10,
    message: 'Violent incident reported',
  },
  7: {
    name: 'suicide',
    passengerReduction: .5,
    timeToFix: 20,
    message: 'An individual was struck by a train',
  },
  8: {
    name: 'derailment',
    passengerReduction: 1,
    timeToFix: 50,
    message: 'A train has derailed',
  },
  9: {
    name: 'crash',
    passengerReduction: 1,
    timeToFix: 100,
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
    name: 'For Totten',
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

var game = {
  init: function () {
    game.setStationIds();
  },

  state: {

  },

  constants: {
    cycleTime: 1000,
  },

  setStationIds: function () {
    var stations = document.getElementsByClassName('station');
    for (var i = 0, j = stations.length; i < j; i++) {
      stations[i].setAttribute('id', i + 1);
    }
  },
};

game.init();
