var colors = [ '#F49AC2', '#CB99C9', '#E84751', '#C23B22', '#FFD1DC', '#DEA5A4', '#AEC6CF', '#77DD77', 
			   '#CFCFC4', '#B39EB5', '#FFB347', '#B19CD9', '#FF6961', '#03C03C', '#FDFD96', '#836953',  
			   '#779ECB', '#966FD6'], i = 0;



$("#button").click(function(){ 
    $("body").css("backgroundColor", colors[i]);
    $("button").css("backgroundColor", colors[i]);
    i = (i==colors.length-1) ? 0 : (i+1);
});