//Return Largest Numbers in Arrays
//Return an array consisting of the largest number from each provided sub-array
//For simplicity, the provided array will contain exactly 4 sub-arrays

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
  for (var i = 0; i < arr.length; i++) {            // loops through array with indexes
  	max = Math.max.apply(null, arr[i]);             // use Math.max and .apply(null, array) to extract largest number from an array
  	tallest.push(max);                              // add max to new array
  } return tallest;
} 

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// [ 5, 27, 39, 1001 ]

largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) 
// [9, 35, 97, 1000000]