var API_KEY = "d19f6725b4e71d3942c11562d40eb174";
var cel = false;
var wd;

function displayTemp(ftemp, c) {
	if (c) return Math.round((ftemp - 32) * (5/9)) + "&#176;";
	return Math.round(ftemp) + "&#176;"; 
}

function render(wd, cel){
	var currentLocation = wd.name;
	var currentWeather = wd.weather[0].description;
	var currentTemp = displayTemp(wd.main.temp, cel);
	var high = displayTemp(wd.main.temp_max, cel);
	var low = displayTemp(wd.main.temp_min, cel);

	$('#location').html(currentLocation);
	$('#currentTemp').html(currentTemp);
	$('#currentWeather').html(currentWeather);
	$('#high-low').html(high + " / " + low);
}

var bg_animation = $('body');

$(document).ready(function() {

	$.getJSON("http://ipinfo.io/json", function(d){
		alert("assigning the data...")
		loc = d.loc.split(",");
		alert(loc);

		$.getJSON('http://api.openweathermap.org/data/2.5/weather?units=imperial&lat=' + loc[0] + '&lon=' + loc[1] + '6&APPID=' + API_KEY, function(apiData){
			//loc[0] = lat
			//loc [1] = lon
			//wd = weather data
			wd = apiData;

			render(apiData, cel);

			$('#toggle').click(function(){
				$("tempUnit").toggleClass("bold");
				cel = !cel;
				render(wd, cel);
			})	
		})
	});

});