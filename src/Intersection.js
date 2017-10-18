/*** MENARD LUDOVIC ***/
/***** 18/10/2017 *****/

"use strict";

Lyngk.State = {VACANT: 0, ONE_PIECE: 1, STACK: 2, FULL_STACK: 3};

Lyngk.Intersection = function () {

    // Story 7 état VACANT
    var defaultState = Lyngk.State.VACANT;
    var piece = [];

    this.getState = function () {
      return defaultState;
    };

    this.color = function () {
        return piece[piece.length -1].getColor();
    }

    this.pose = function (c) {
      if(piece.length == 0)
          defaultState = Lyngk.State.ONE_PIECE;
      else if(piece.length < 4)
          defaultState = Lyngk.State.STACK;
      else
          defaultState = Lyngk.State.FULL_STACK;

      piece.push(new Lyngk.Piece(c))
    };

};
