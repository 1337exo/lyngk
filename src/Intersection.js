/*** MENARD LUDOVIC ***/
/***** 18/10/2017 *****/

"use strict";

Lyngk.State = {VACANT: 0, ONE_PIECE: 1, STACK: 2, FULL_STACK: 3};

Lyngk.Intersection = function (c) {

    var private_coordinate = c;
    var defaultState = Lyngk.State.VACANT;
    var private_piece = [];

    var private_color;


    this.getState = function () {
      return defaultState;
    };

    this.getColor = function () {
        return private_color;
    };

    this.pose = function (p) {
        private_piece.push(p);
        private_color = p.getColor();

        if(defaultState === Lyngk.State.ONE_PIECE){
            defaultState = Lyngk.State.STACK;
        }else{
            defaultState = Lyngk.State.ONE_PIECE;
        }

        if(private_piece.length === 5)
            defaultState = Lyngk.State.FULL_STACK;
    };

};
