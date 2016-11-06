//Find the Longest Word in a String

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

/*-------------------------------------------------------*/

//Title Case a Sentence

function titleCase(str) {
  var strLoAr= str.toLowerCase().split(" ");          // lowercase all letters then arraize them 
  var capped;
  var fixed;
  var titled = [];
  console.log(strLoAr);                               // [ 'i\'m', 'a', 'little', 'tea', 'pot' ]
  for (var i = 0; i < strLoAr.length; i++) {          // loops through strLoAr array with indexes                            
    fixed = strLoAr[i].slice(1);                      // removes first letter of each word
    capped = strLoAr[i][0].toUpperCase();             // extracts only the first letter from each word and captialize
    titled.push(capped + fixed);                      // add to new array, concatenate capped with fixed
  }
    return titled.join(" ");
} 

titleCase("I'm a little tea pot");
// 'I'm A Little Tea Pot'

/*-------------------------------------------------------*/

//Return Largest Numbers in Arrays

function largestOfFour(arr) {
  var tallest = [];
  for (var i = 0; i < arr.length; i++) {                   // loops through each arrays in an array with indexes
  	var max = 0;                                           // set variable to 0
  	for (var j = 0; j < arr[i].length; j++) {              // loops through each elements in each arrays 
		if (arr[i][j] > max){                                  // if element is bigger than max, set it to max
			max = arr[i][j];                           
		}
	} tallest.push(max);                                     // add biggest element into new array
  } return tallest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// [ 5, 27, 39, 1001 ]

/************************/

// Another way to solve this problem, using Math.max()

function largestOfFour(arr) {
  var tallest= [];
  var max;
  for (var i = 0; i < arr.length; i++) {                   // loops through array with indexes
  	max = Math.max.apply(null, arr[i]);                    // use Math.max and .apply(null, array) to extract largest number from an array
  	tallest.push(max);                                     // add max to new array
  } return tallest;
} 

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// [ 5, 27, 39, 1001 ]