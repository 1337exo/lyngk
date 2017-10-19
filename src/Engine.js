"use strict";

// enums definition
Lyngk.Color = {BLACK: 0, IVORY: 1, BLUE: 2, RED: 3, GREEN: 4, WHITE: 5};

Lyngk.Engine = function () {

    var plateau = [];

    this.initBoard = function () {
        var letter = "ABCDEFGHI";
        for(var i = 0; i < letter.length; ++i){
            for(var j = 0; j<9;++j){
                var coordinates = new Lyngk.Coordinates(letter[i],j);
                if(coordinates.is_valid()){
                    var intersection = new Lyngk.Intersection(coordinates);
                    var piece = new Lyngk.Piece(Lyngk.Color.BLUE);
                    intersection.pose(piece);
                    plateau.push(intersection);
                }
            }
        }

    };

    this.getBoard = function () {
     return plateau;

    };

};
