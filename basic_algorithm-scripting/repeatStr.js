//Repeat a string repeat a string
//Repeat a given string (first argument) num times (second argument)
//Return an empty string if num is not a positive number

function repeatStringNumTimes(str, num) {
    var repeated = [];
    var result;
  if (num > 0) {                                     // if number is greater than 0
      for (var i = 0; i < num; i++) {                // loops as many as the number dictate
      repeated.push(str);                            // each time it looped, pushes into an array
      result = repeated.join("");                    // turns array back into a string
    } 
    return result;                                    
  } else {
    return "";
  }
} 

rrepeatStringNumTimes("*", 3)
// "***"

repeatStringNumTimes("abc", 3) 
// "abcabcabc"
repeatStringNumTimes("abc", 4)
// "abcabcabcabc"

repeatStringNumTimes("abc", 1) 
// "abc"

repeatStringNumTimes("*", 8) 
// "********"

repeatStringNumTimes("abc", -2) 
// ""