//Mutations
//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array
//Return true because all of the letters in the second string are present in the first, ignoring case
//The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y"
//["Alien", "line"], should return true because all of the letters in "line" are present in "Alien"


function mutation(arr) {   
  dna = arr[0].toLowerCase();                       /* arr usually have two words, so lowcase both of them using index 0 and index 1
  													   so that way I can compare both words' spelling, arr [ dna, mutated] */
  mutated = arr[1].toLowerCase();                           
  for (var i = 0; i < mutated.length; i++) {        // loops through mutated word
  	if (dna.indexOf(mutated[i]) === -1) {           // .indexOf(searchElement), if cannot find match between dna and mutated element
  		return false;								
  	}
  } return true;                                    // if all elements in dna found match
}

// mutation(["hello", "hey"]);
// false

mutation(["zYxwvutsrqponmlkjihgfedcba", "qrstu"]) 
// true

// mutation(["Alien", "line"])
// // true

// mutation(["floor", "for"]) 
// // true

// mutation(["hello", "neo"]) 
// // false
