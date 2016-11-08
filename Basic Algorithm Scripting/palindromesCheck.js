//Check for Palindromes
//Return true if the given string is a palindrome. Otherwise, return false
//Ignores special characters

function palindrome(str) {
  var clean = str.replace(/[\W_]/g, '');           // ignores special characters using regex 
  // eye
  var strLo = clean.toLowerCase("");               // lowercase all letters
  for (var i = 0; i < strLo.length/2; i++) {       // index investigate halfway from first letter to the half length of a word
  	if (strLo[i] !== strLo[strLo.length-1-i]) {    // if indexes of the first half word doesn't match the second half word indexes backward
      return false;                                 
  	}
  } return true;
}

// palindrome("eye") should return a boolean

palindrome("eye") 
// true

palindrome("_eye") 
// true

palindrome("race car") 
// true

palindrome("not a palindrome") 
// false

palindrome("A man, a plan, a canal. Panama") 
// true

palindrome("never odd or even") 
// true

palindrome("nope") 
// false

palindrome("almostomla") 
// false

palindrome("My age is 0, 0 si ega ym.") 
// true

palindrome("1 eye for of 1 eye.") 
// false

palindrome("0_0 (: /-\ :) 0-0") 
// true

palindrome("five|\_/|four") 
// false
