//Reverse a string
//Reverse the provided string

function reverseString(str) {
  var reversed = str.split("").reverse("").join("");
  // .split() = turn into an array = [ 'h', 'e', 'l', 'l', 'o']
  // .reverse() = reverse the array = [ 'o', 'l', 'l', 'e', 'h']
  // .join() = turn array into string = 'olleh'
  return reversed;
}


//reverseString("hello") should return a string.

reverseString("hello");
// 'olleh'

reverseString("Howdy") 
// "ydwoH".

reverseString("Greetings from Earth")
// "htraE morf sgniteerG".

