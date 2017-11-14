/*** MENARD LUDOVIC ***/
/***** 18/10/2017 *****/

"use strict";

Lyngk.State = {VACANT: 0, ONE_PIECE: 1, STACK: 2, FULL_STACK: 3};

Lyngk.Intersection = function (c) {

    var privateCoordinate = c;
    var defaultState = Lyngk.State.VACANT;
    var pieces = [];

    this.getCoordinate = function () {
        return privateCoordinate;
    };

    this.getHeight = function () {
        return pieces.length;
    };

    this.getState = function () {
        return defaultState;
    };

    this.setState = function (state) {
        defaultState = state;
    };

    this.getColor = function () {
        return pieces[pieces.length - 1].getColor();
    };

    this.getPiece = function () {
        return pieces;
    };

    this.pose = function (p) {
        if (defaultState !== Lyngk.State.FULL_STACK) {
            pieces.push(p);
            if (pieces.length >= 3) {
                defaultState = pieces.length - Math.floor(pieces.length / 2);
            } else {
                defaultState = pieces.length;
            }
        }
    };

    this.retire = function (inter) {
        defaultState = Lyngk.State.VACANT;
        inter.pose(pieces[pieces.length - 1]);
        pieces.pop();
    };
};
