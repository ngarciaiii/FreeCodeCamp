//Factorialize a Number
//Factorials are often represented with the shorthand notation n!
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

factorialize(10)
// 3628800

factorialize(20)
// 2432902008176640000

factorialize(0)
// 1
