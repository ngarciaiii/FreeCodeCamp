//Chunky Monkey
//Write a function that splits an array (first argument) into groups the length 
    //of size (second argument) and returns them as a two-dimensional array

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

chunkArrayInGroups(["a", "b", "c", "d"], 2) 
// [["a", "b"], ["c", "d"]]

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) 
// [[0, 1, 2], [3, 4, 5]]

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) 
// [[0, 1], [2, 3], [4, 5]]

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)
// [[0, 1, 2, 3], [4, 5]]

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) 
// [[0, 1, 2], [3, 4, 5], [6]]

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) 
// [[0, 1, 2, 3], [4, 5, 6, 7], [8]]

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) 
// [[0, 1], [2, 3], [4, 5], [6, 7], [8]]
