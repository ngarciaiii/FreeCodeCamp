//Title Case a Sentence
//Return the provided string with the first letter of each word capitalized
//Make sure the rest of the word is in lower case

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

titleCase("sHoRt AnD sToUt")
// "Short And Stout"

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") 
// "Here Is My Handle Here Is My Spout"
