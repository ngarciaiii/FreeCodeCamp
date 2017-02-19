//Seek and Destory
//Provided with an initial array (the first argument in the destroyer function), followed by one or more arguments
//Remove all elements from the initial array that are of the same value as these arguments

function destroyer(arr) {
 console.log(arguments);                        		  /* arguments will extract information from arr
// { '0': [ 3, 5, 1, 2, 2 ], '1': 2, '2': 3, '3': 5 }	  or arguments passed to a function, and it is
														  object that looks like an array, input below */

 var args = arr.slice.call(arguments, 1);                 /* create a variable args to hold arr[1],
 														  using .slice() to remove arr[0] and 
 														  .call() to invoke arguments' object and its 
 														  properties*/

 var destroyed = arr.filter(function(element) {
 	for (var arg in args) {                               // variable to represent a single element in args
 		if (element == args[arg]) {                       // if element match with args' element
 			return;                                       // return empty
 		}
 	} return element;                                     // if no match, return the element
 });
 return destroyed;                                        // destroyed holds all returned elements
} 

destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)
// [1, 5, 1]

destroyer([3, 5, 1, 2, 2], 2, 3, 5)
// [1]

destroyer([2, 3, 2, 3], 2, 3)
// []

destroyer(["tree", "hamburger", 53], "tree", 53)
// ["hamburger"]
