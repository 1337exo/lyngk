/*** MENARD LUDOVIC ***/
/***** 18/10/2017 *****/

'use strict';

var LyngkTestCase = TestCase("LyngkTestCase");


/*** STORY 1 ***/

LyngkTestCase.prototype.testStory1 = function () {
    var coordinates = new Lyngk.Coordinates('A', 1);
    assertFalse(coordinates.is_valid());
};


/*** STORY 2 ***/

LyngkTestCase.prototype.testStory2 = function () {
    var nbValidCase = 0;
    var letter = "ABCDEFGHI"
    for (var l = 0; l < letter.length; ++l) {
        for (var c = 1; c < 10; ++c) {
            var coordinates = new Lyngk.Coordinates(letter[l], c);
            if (coordinates.is_valid())
                ++nbValidCase;
        }
    }
    assertTrue(nbValidCase === 43);
};

/*** STORY 3 ***/

LyngkTestCase.prototype.testStory3 = function () {
    var coordinates = new Lyngk.Coordinates('A', 3);
    assertTrue(coordinates.toString() === "A3");
};


/*** STORY 4 ***/

LyngkTestCase.prototype.testStory4 = function () {
    var coordinates = new Lyngk.Coordinates('B', 1);
    assertTrue(coordinates.toString() === "invalid");
};

/*** STORY 5 ***/

LyngkTestCase.prototype.testStory5 = function () {
    var coordinates = new Lyngk.Coordinates("A", 3);
    var coordinatesClone = coordinates.clone();
    assertTrue(coordinates.toString() === coordinatesClone.toString());
};

/*** STORY 6 ***/

LyngkTestCase.prototype.testStory6 = function () {
    var coordinates = new Lyngk.Coordinates("I", 7)
    assertTrue(coordinates.hash() === 737);
};

/*** STORY 7 ***/

LyngkTestCase.prototype.testStory7 = function () {
    var intersections = new Lyngk.Intersection();
    assertTrue(intersections.getState() === Lyngk.State.VACANT);// Use State Tab in Intersection
};

/*** STORY 8 ***/
LyngkTestCase.prototype.testStory8 = function () {
    var intersections = new Lyngk.Intersection();
    intersections.pose(new Lyngk.Piece(Lyngk.Color.BLUE));
    assertTrue(intersections.getState() === Lyngk.State.ONE_PIECE && intersections.getColor() === Lyngk.Color.BLUE);
};

/*** STORY 9 ***/

LyngkTestCase.prototype.testStory9 = function () {
    var intersections = new Lyngk.Intersection();
    intersections.pose(new Lyngk.Piece(Lyngk.Color.BLUE));
    intersections.pose(new Lyngk.Piece(Lyngk.Color.RED));
    assertTrue(intersections.getState() === Lyngk.State.STACK && intersections.getColor() === Lyngk.Color.RED);
};

/*** STORY 10 ***/

LyngkTestCase.prototype.testStory10 = function () {
    var intersections = new Lyngk.Intersection();
    intersections.pose(new Lyngk.Piece(Lyngk.Color.BLUE));
    intersections.pose(new Lyngk.Piece(Lyngk.Color.RED));
    intersections.pose(new Lyngk.Piece(Lyngk.Color.GREEN));
    intersections.pose(new Lyngk.Piece(Lyngk.Color.BLACK));
    intersections.pose(new Lyngk.Piece(Lyngk.Color.WHITE));
    assertTrue(intersections.getState() === Lyngk.State.FULL_STACK && intersections.getColor() === Lyngk.Color.WHITE);
};

/*** STORY 11 ***/
LyngkTestCase.prototype.testStory11 = function () {
    var board = new Lyngk.Engine();
    board.initBoard();
    var plateau = board.getBoard();
    for (var i = 0; i < plateau.length; ++i) {
        assertTrue(plateau[i].getState() === Lyngk.State.ONE_PIECE);
    }

};

/*** STORY 12 ***/
LyngkTestCase.prototype.testStory12 = function () {
    var board = new Lyngk.Engine();
    board.initBoard();
    var plateau = board.getBoard();
    var nbColor = 0;
    for (var i = 0; i < Object.keys(Lyngk.Color).length; ++i) {
        nbColor = 0;
        for (var j = 0; j < plateau.length; ++j) {
            if (plateau[j].getColor() === Object.keys(Lyngk.Color)[i])
                ++nbColor;
        }
        if ((Object.keys(Lyngk.Color).length - 1) === i) {
            assertEquals(nbColor, 3);
        } else {
            assertEquals(nbColor, 8);
        }
    }
};

/*** STORY 13 ***/

LyngkTestCase.prototype.testStory13 = function () {
    var board = new Lyngk.Engine();
    board.initBoard();
    var plateau = board.getBoard();
    for (var i = 0; i < plateau.length; ++i) {
        assertTrue(plateau[i].getHeight() === 1);
    }

};

/*** STORY 14 ***/

LyngkTestCase.prototype.testStory14 = function () {
    var board = new Lyngk.Engine();
    board.initBoard();
    var plateau = board.getBoard();
    for (var i = 0; i < plateau.length; ++i) {
        assertTrue(plateau[i].getColor() === plateau[i].getPiece()[plateau[i].getHeight() - 1].getColor());
    }

};

/*** STORY 15 ***/

LyngkTestCase.prototype.testStory15 = function () {
    var board = new Lyngk.Engine();
    board.initBoard();
    var plateau = board.getBoard();
    var index = board.getIntersection("A3");
    var index2 = board.getIntersection("B3");
    var colorA3 = plateau[index].getColor();
    board.move("A3", "B3");
    assertTrue(plateau[index].getState() === Lyngk.State.VACANT && plateau[index2].getColor() === colorA3);
};


/*** STORY 16 ***/
LyngkTestCase.prototype.testStory16 = function () {
    var board = new Lyngk.Engine();
    board.initBoard();
    var plateau = board.getBoard();
    var index = board.getIntersection("B3");
    var index2 = board.getIntersection("B2");
    board.move("A3", "B3");
    var HeightLastMove = plateau[index2].getHeight();
    var colorLastMove = plateau[index].getColor();
    board.move("B3", "B2");
    assertTrue(plateau[index].getState() === Lyngk.State.VACANT && plateau[index2].getColor() === colorLastMove
        && plateau[index2].getHeight() === plateau[index].getHeight() + HeightLastMove);
};


/*** STORY 17 ***/
LyngkTestCase.prototype.testStory17 = function () {
    var board = new Lyngk.Engine();
    board.initBoard();
    var plateau = board.getBoard();
    board.move("B3", "B2");
    board.move("B2", "B3");

    assertTrue(plateau[board.getIntersection("B3")].getState() === Lyngk.State.VACANT);
};

/*** STORY 18 ***/
LyngkTestCase.prototype.testStory18 = function () {
    var board = new Lyngk.Engine();
    board.initBoard();
    var plateau = board.getBoard();
    board.move("C2", "B3");
    assertTrue(plateau[board.getIntersection("B3")].getHeight() === 1 && plateau[board.getIntersection("C2")].getHeight() === 1);

};