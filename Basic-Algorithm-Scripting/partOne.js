//Reverse a string

function reverseString(str) {
  var reversed = str.split("").reverse("").join("");
  // .split() = turn into an array = [ 'h', 'e', 'l', 'l', 'o']
  // .reverse() = reverse the array = [ 'o', 'l', 'l', 'e', 'h']
  // .join() = turn array into string = 'olleh'
  return reversed;
}

reverseString("hello");
// 'olleh'

/*-------------------------------------------------------*/

//Factorialize a Number
//For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

function factorialize(num) {
  var product = 1;                   // set a variable to equal to 1
  for (var i = num; i > 0; i--) {    // i loops backward from 5 to 1
    product *= i;                    // product multiples i and then product becomes the new product
    // i * product = product
    // 5 * 1 = 5
    // 4 * 5 = 20
    // 3 * 20 = 60
    // 2 * 60 = 120
    // 1 * 120 = 120
  }
  return product; 
}

factorialize(5);
// 120

/*-------------------------------------------------------*/

//Check for Palindromes
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



palindrome("_eye");
// true
