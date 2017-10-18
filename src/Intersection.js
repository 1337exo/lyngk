/*** MENARD LUDOVIC ***/
/***** 18/10/2017 *****/

"use strict";

Lyngk.State = {VACANT: 0, ONE_PIECE: 1, STACK: 2, FULL_STACK: 3};

Lyngk.Intersection = function (c) {

    // Story 7 état VACANT
    var defaultState = Lyngk.State.VACANT;

    this.getState = function () {
      return defaultState;
    };

};
