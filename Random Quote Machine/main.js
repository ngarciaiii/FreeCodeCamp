// var colors = [ '#F49AC2', '#CB99C9', '#E84751', '#C23B22', '#FFD1DC', '#DEA5A4', '#AEC6CF', '#77DD77', 
// '#CFCFC4', '#B39EB5', '#FFB347', '#B19CD9', '#FF6961', '#03C03C', '#FDFD96', '#836953', '#779ECB', '#966FD6'];

var colors = ["rgba(86,175,99,0.6)", "rgba(86,175,222,0.6)", "rgba(0,0,0,0.6)"];
                    
jQuery(".rotator").click(function() {
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    jQuery('body').css("background", randomColor);
});