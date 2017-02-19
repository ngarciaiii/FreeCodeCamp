//Find the Longest Word in a String
//Return the length of the longest word in the provided sentence
//Your response should be a number.

function findLongestWord(str) {
  var arraized = str.split(" ");                      // turns string into an array
  var biggest= 0;                                     // set a variable to 0
  for (var i = 0; i < arraized.length; i++) {         // loops through an array with indexes
    var cur = arraized[i].length;                     // set variable to extract elements through indexes
  	if (cur > biggest) {                              // if cur is bigger than biggest, set it to biggest
  		biggest = cur;                                  
  	}
  } return biggest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
// 6

findLongestWord("May the force be with you")
// 5

findLongestWord("Google do a barrel roll") 
// 6

findLongestWord("What is the average airspeed velocity of an unladen swallow") 
// 8

findLongestWord("What if we try a super-long word such as otorhinolaryngology")
// 19