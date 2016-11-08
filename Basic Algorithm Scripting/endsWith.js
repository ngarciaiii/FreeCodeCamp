//Confirming the Ending
//Check if a string (first argument, str) ends with the given target string (second argument, target)

/* This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead */

function confirmEnding(str, target) {
var len = target.length;                       // Assigning variable to follow target's number of indexes
for (var i = 0; i < str.length; i++) {         // looping through a string
	if (str.substr(- len) == target) {         // if specified location string backward matches the target elements
		return true;                           // return true
	} else {
		return false;
	}
}
return str;
}

confirmEnding("Bastian", "n")
// true

confirmEnding("Connor", "n") 
// false

confirmEnding("He has to give me a new name", "name") 
// true

confirmEnding("Open sesame", "same")
// true

confirmEnding("Open sesame", "pen")
false