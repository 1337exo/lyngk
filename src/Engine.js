"use strict";

// enums definition
Lyngk.Color = {BLACK: 0, IVORY: 1, BLUE: 2, RED: 3, GREEN: 4, WHITE: 5};

Lyngk.Engine = function () {

    var plateau = [];
    var goodColor = [];

    this.initBoard = function () {
        var letter = "ABCDEFGHI";
        goodColor = [0,0,0,0,0,0];
        for(var i = 0; i<letter.length; i++){
            this.makeBoard(i,letter[i]);
        }
    };

    this.makeBoard = function (i,letter) {

        for(var j = 0; j <=9; ++j) {
            var coordinates = new Lyngk.Coordinates(letter, j);
            if (coordinates.isValid()) {
                var intersection = new Lyngk.Intersection(coordinates);
                var c = this.randColor();
                var piece = new Lyngk.Piece(Object.keys(Lyngk.Color)[c]);
                intersection.pose(piece);
                plateau.push(intersection);
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
        var columns = ["A","B","C","D","E","F","G","H","I"];
        var deltaColumn = columns.indexOf(c1[0]) - columns.indexOf(c2[0]);
        var deltaLine = parseInt(c1[1]) - parseInt(c2[1])
        if(plateau[this.getIntersection(c2)].getState() !== Lyngk.State.VACANT
            && plateau[this.getIntersection(c1)].getState() !== Lyngk.State.FULL_STACK
            && ((Math.abs(deltaColumn) === 1 && deltaLine === 0)
                || (deltaColumn === 0 && Math.abs(deltaLine) === 1)
                || deltaColumn === 1 && deltaLine === 1
                || deltaColumn === -1 && deltaLine === -1))
      plateau[this.getIntersection(c1)].retire(plateau[this.getIntersection(c2)]);
    };



    this.getBoard = function () {
     return plateau;

    };

};
