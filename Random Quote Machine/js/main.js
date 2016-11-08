// var myColors = [ '#F49AC2', '#CB99C9', '#E84751', '#C23B22', '#FFD1DC', '#DEA5A4', '#AEC6CF', '#77DD77', 
// '#CFCFC4', '#B39EB5', '#FFB347', '#B19CD9', '#FF6961', '#03C03C', '#FDFD96', '#836953', '#779ECB', '#966FD6'];
                
// function clickMe(){
//   var randomize = Math.floor(Math.random()*myColors.length);
//   $('.box').css("background-color", myColors[randomize]);
// }

var myColors = ['red', 'purple', '#E84751', 'blue', 'orange', '#323643'];
                
function clickMe(){
  var randomize = Math.floor(Math.random()*myColors.length);
  $('.box').css("background-color", myColors[randomize]);
}