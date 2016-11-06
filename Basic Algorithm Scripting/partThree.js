//Confirming the Ending

function confirmEnding(str, target) {
var len = target.length;                             // Assigning variable to follow target's number of indexes
for (var i = 0; i < str.length; i++) {               // looping through a string
	if (str.substr(- len) == target) {                 // if specified location string backward matches the target elements
		return true;                                     // return true
	} else {
		return false;
	}
}
return str;
}

confirmEnding("Bastian", "n");
// true

confirmEnding("Open sesame", "same")
// true

/*-------------------------------------------------------*/

//Repeat a string repeat a string

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

repeatStringNumTimes("*", 3);
// '***'

repeatStringNumTimes("*", -3);
// ""

/*-------------------------------------------------------*/

//Truncate a string

function truncateString(str, num) {
  var truncd;
  if (str.length <= num) {                              // if length is same or less than number, leave string as it is
    return str;
  } else if (num > 3) {                                 // if number is greater than 3
    num = num - 3;                                      // number now equals to number subtracted by 3
    num = str.length-num;                               // number now equals to string length subtracted from number
    truncd = str.slice(str, -num).concat("...");        // str slices string and length of number in backward then replace with '...'
    return truncd;
  } else {
    truncd = str.slice(str, num).concat("...");         // if number is less than 3 just slice and replace or add with '...'
    return truncd;
  }
}

truncateString("A-", 1);
// 'A...'

/*-------------------------------------------------------*/

//Chunky Monkey

function chunkArrayInGroups(arr, size) {             
  var chunk;
  var chunkd = [];
  for (var i = 0; i < arr.length; i += size) {         /* loops through array, i starts with 0 in first loop 
                                                          i plus size (in this size, 2) as an increment, becomes a new i
                                                          so i starts at 2 by the second loop 
                                                          i starts at 4 by third loop if string is longer
                                                          adding 2 on each loop ongoing */ 
    chunk = arr.slice(i, i+size);                      // array.slice(begin, end) 
    chunkd.push(chunk);
  }
  return chunkd;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
// [ ['a', 'b'], ['c', 'd'] ]

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)
// [ ['0', '1', '2'], ['3', '4', '5'] ]

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)
// [ ['0', '1'], ['2','3'], ['4', '5']]

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)
// [ ['0', '1', '2' , '3'], [ '4', '5', ] ]


