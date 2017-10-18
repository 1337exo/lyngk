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
          var coord = new Lyngk.Coordinates(letter[l],c);
          if(coord.is_valid())
              ++nbValidCase;
      }
  }
  assertTrue(nbValidCase===43);
};