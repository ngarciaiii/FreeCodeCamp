// Caesars Cipher

function rot13(str) { // LBH QVQ VG!
  var decoded = "";
  var input;
  for (var i = 0; i < str.length; i++) {
  	var idx = str.charCodeAt(i);
  	if (idx >= 65 && idx <= 90) {
	    if (idx + 13 < 91) {
	      input = idx + 13;
	      decoded += (String.fromCharCode(input));
	    } else {
	      var total = idx + 13;
	      var fix = total - 90;
	      input = 64 + fix;
	      decoded += (String.fromCharCode(input));
	    } 
	} else {
	      decoded += str[i];
	}  
  } return decoded;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

rot13("SERR PBQR PNZC") should decode to 
// "FREE CODE CAMP"

rot13("SERR CVMMN!")
// "FREE PIZZA!"

rot13("SERR YBIR?")
// "FREE LOVE?"

rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.")
// "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
