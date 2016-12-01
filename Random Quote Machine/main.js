//color changes on click

var colors = [ '#00004C','#E50000', '#000066', '#CE0000', '#00007F', '#B70000', '#000099', '#A00000', '#0000B2', 
			   '#890000', '#0000CC'], i = 0;


$(document).ready(function() {

	$("button").on("click", function(){
		$.getJSON("https://api.whatdoestrumpthink.com/api/v1/quotes/random", function(data, status){
			var quote = data.message;
			$("#message").text(quote);
		});
			
	    $("body").css("backgroundColor", colors[i]);
	    $("button").css("backgroundColor", colors[i]);
	    i = (i == colors.length-1) ? 0 : (i+1);	
 	});
	
}); 
