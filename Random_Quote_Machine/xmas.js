//color changes on click

var colors = [ '#003c00', '#197319', '#004600', '#328332', '#005000', '#4c924c', '#003200'], i = 0;


$(document).ready(function() {

	$("button").on("click", function(){
		$.getJSON("https://api.whatdoestrumpthink.com/api/v1/quotes/random", function(data, status){
			var quote = data.message;
			$("#message").text(quote);
		});
		
	    $("body").css("backgroundColor", colors[i]);
	    $("span").css("backgroundColor", colors[i]);
	    // $("button").css("backgroundColor", colors[i]);
	    i = (i == colors.length-1) ? 0 : (i+1);	
 	});
	
	$("#tweet").on("click",function(){
      var text = document.getElementById('message').innerHTML;
      var link= "https://twitter.com/intent/tweet?text=" + text + "&hashtags=trump";
      window.open(link,'_blank');
  });
}); 
