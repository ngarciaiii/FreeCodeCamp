
//Truncate a string
//Truncate a string (first argument) if it is longer than the given maximum string length (second argument
//Return the truncated string with a ... ending
//Note that inserting the three dots to the end will add to the string length
//If the given maximum string length num is less than or equal to 3, then the addition of the three dots 
      //does not add to the string length in determining the truncated string

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

truncateString("A-tisket a-tasket A green and yellow basket", 11) 
// "A-tisket..."

truncateString("Peter Piper picked a peck of pickled peppers", 14) 
// "Peter Piper..."

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) 
// "A-tisket a-tasket A green and yellow basket"

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) 
// "A-tisket a-tasket A green and yellow basket"

truncateString("A-", 1)
// "A..."

truncateString("Absolutely Longer", 2) 
// "Ab..."
