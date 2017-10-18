/*** MENARD LUDOVIC ***/
/***** 18/10/2017 *****/

"use strict";


Lyngk.Coordinates = function (c, l) {
    // implementation d'une grille

    var private_col = c;
    var private_line = l;
    this.is_valid = function () {
       // Coordonnée valide
    var goodCoordinates = [
        'A3',
        'B2','B3','B4','B5',
        'C1','C2','C3','C4','C5','C6','C7',
        'D2','D3','D4','D5','D6','D7',
        'E2','E3','E4','E5','E6','E7','E8',
        'F3','F4','F5','F6','F7','F8',
        'G3','G4','G5','G6','G7','G8','G9',
        'H5','H6','H7','H8',
        'I7'
    ];

      return goodCoordinates.indexOf(private_col+private_line)>=0;
    };

    this.toString = function () {
      if(this.is_valid())
          return private_col+private_line;
    };

};
