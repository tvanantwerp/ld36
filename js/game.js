'use strict'

var game = {
  init: function () {
    game.setStationIds();
  },

  setStationIds: function () {
    var stations = document.getElementsByClassName('station');
    for (var i = 0, j = stations.length; i < j; i++) {
      stations[i].setAttribute('id', i + 1);
    }
  },
};

game.init();
