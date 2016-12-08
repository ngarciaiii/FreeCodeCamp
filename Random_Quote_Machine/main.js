//color changes on click

var colors = [ '#00004C', '#3232FF', '#000066', '#7F7FFF', '#0000CC', '#00007F', '#4242E7', '#000099', '#0000E5'], i = 0;


$(document).ready(function() {

	//changes background color and span color when clicks
	$("button").on("click", function(){
		$.getJSON("https://api.whatdoestrumpthink.com/api/v1/quotes/random", function(data, status){
			var quote = data.message;
			$("#message").text(quote);
		});
		
	    $("body").css("backgroundColor", colors[i]);
	    $("span").css("backgroundColor", colors[i]);;
	    i = (i == colors.length-1) ? 0 : (i+1);	
 	});
	
	//share tweet when clicks, works only on desktop??
	$("#tweet").on("click",function(){
      var text = document.getElementById('message').innerHTML;
      var link= "https://twitter.com/intent/tweet?text=" + text + "&hashtags=trump";
      window.open(link,'_blank');
  	});

	// Set num of stars according to window width, doesn't work well with ngrok for mobile??
	var width = window.innerWidth;
	if (width < 800) {
		// Set 3 stars
		$(".stars").html("&#9733 &#9733 &#9733");
	} else {
		// Set 5 stars and footer for desktop screen
		$(".stars").html("&#9733 &#9733 &#9733 &#9733 &#9733");
		$("footer").html('<p>Credits: <a target = "_blank" href = "https://www.whatdoestrumpthink.com/">WhatdoesTrumpthink?</a>   - Quotes API <br> Designed and Developed By <a targe = "-blank" href = "https://www.freecodecamp.com/ngarciaiii">Nicolas Garcia.</a> &copy; Unflustered Studio.</p>')
	}

}); 

