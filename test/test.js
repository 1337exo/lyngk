/*** MENARD LUDOVIC ***/
/***** 18/10/2017 *****/

'use strict';

var LyngkTestCase = TestCase("LyngkTestCase");


/*** STORY 1 ***/

LyngkTestCase.prototype.testStory1 = function () {
  var coordinates = new Lyngk.coordinates('A', 1);
  asserFalse(coordinates.is_valide());
};
