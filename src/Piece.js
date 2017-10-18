"use strict";

Lyngk.Piece = function (c) {
    var private_color = c;

    this.getColor = function () {
      return private_color;
    };
};
