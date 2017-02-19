//Falsy Bouncer
//Remove all falsy values from an array
//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN

function bouncer(arr) {
  var entered = [];
  for (var i = 0; i < arr.length; i++) {
  	if (Boolean(arr[i])) {                                //if arr[i] is true, add to new array
  		entered.push(arr[i]);
  	}
  } return entered;
}

bouncer([7, "ate", "", false, 9]);
// [7, "ate", 9]

bouncer(["a", "b", "c"])
// ["a", "b", "c"]

bouncer([false, null, 0, NaN, undefined, ""])
// []

bouncer([1, null, NaN, 2, undefined]) 
// [1, 2]

/************************/
// Another way to solve this problem, using Math.max()

function bouncer(arr) {
  var entered = arr.filter(function(value) {
  	if (value) {                                         //if has value then it is true, add to new array
  		return value;
  	}
  }); return entered;
}

bouncer([7, "ate", "", false, 9]);
// [7, "ate", 9]

bouncer(["a", "b", "c"])
// ["a", "b", "c"]

bouncer([false, null, 0, NaN, undefined, ""])
// []

bouncer([1, null, NaN, 2, undefined]) 
// [1, 2]
