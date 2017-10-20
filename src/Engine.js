"use strict";

// enums definition
Lyngk.Color = {BLACK: 0, IVORY: 1, BLUE: 2, RED: 3, GREEN: 4, WHITE: 5};

Lyngk.Engine = function () {

    var plateau = [];
    var goodColor = [];

    this.initBoard = function () {
        var letter = "ABCDEFGHI";
        goodColor = [0,0,0,0,0,0];
        for(var i = 0; i < letter.length; ++i){
            for(var j = 0; j<=9;++j){
                var coordinates = new Lyngk.Coordinates(letter[i],j);
                if(coordinates.is_valid()){
                    var intersection = new Lyngk.Intersection(coordinates);
                    var piece = new Lyngk.Piece(Object.keys(Lyngk.Color)[this.randColor()]);
                    intersection.pose(piece);
                    plateau.push(intersection);
                }
            }
        }

    };

    this.randColor = function () {
      var rand;
      var test = false;
      while (!test){
          rand = Math.floor(Math.random() * (6));
          if(rand === 5){
            if(goodColor[rand]<3)
                test = true;
          }else{
              if(goodColor[rand]<8)
                  test = true;
          }
      }
      goodColor[rand]++;
      return rand;
    };

    this.getIntersection = function (c1) {
        for (var i = 0; i < plateau.length; ++i) {
            if (plateau[i].getCoordinate().toString() === c1.toString()) {
                return i;
            }
        }
    };

    this.move = function (c1,c2) {
      plateau[this.getIntersection(c1)].retir(plateau[this.getIntersection(c2)]);
    };



    this.getBoard = function () {
     return plateau;

    };

};
