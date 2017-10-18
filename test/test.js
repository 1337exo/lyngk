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
  for(var l = 0; l < letter.length; ++l){
      for(var c = 1; c < 10; ++c){
          var coordinates = new Lyngk.Coordinates(letter[l],c);
          if(coordinates.is_valid())
              ++nbValidCase;
      }
  }
  assertTrue(nbValidCase===43);
};

/*** STORY 3 ***/

LyngkTestCase.prototype.testStory3 = function () {
  var coordinates = new Lyngk.Coordinates('A',3);
  assertTrue(coordinates.toString()==="A3");
};


/*** STORY 4 ***/

LyngkTestCase.prototype.testStory4 = function () {
  var coordinates = new Lyngk.Coordinates('B',1);
  assertTrue(coordinates.toString()==="invalid");
};