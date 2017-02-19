console.log(process.env.GOOGEO_KEY);
console.log(process.env.OWM_KEY);

// GOOGEO_KEY = ENV["GOOGEO_KEY"];
// OWM_KEY = ENV["OWM_KEY"];

// var cel = false;
// var wd;
// var lat;
// var lon;

// function displayTemp(ftemp, c) {
// 	if (c) return Math.round((ftemp - 32) * (5/9)) + "&#176;";
// 	return Math.round(ftemp) + "&#176;";
// }

// function render(wd, cel){
// 	var currentLocation = wd.name;
// 	var currentWeather = wd.weather[0].description;
// 	var currentTemp = displayTemp(wd.main.temp, cel);
// 	var high = displayTemp(wd.main.temp_max, cel);
// 	var low = displayTemp(wd.main.temp_min, cel);

// 	$('#location').html(currentLocation);
// 	$('#currentTemp').html(currentTemp);
// 	$('#currentWeather').html(currentWeather);
// 	$('#high-low').html(high + " / " + low);
// }

// var bg_animation = $('body');

// $(document).ready(function() {

// 	$.getJSON("https://www.googleapis.com/geolocation/v1/geolocate?key=GOOGEO_KEY", function(data){
// 		lat = data.lat;
// 		lon = data.lon;
// 		alert("assigning the data...")
// 		alert(lat);
// 		alert(lon);

// 		$.getJSON('http://api.openweathermap.org/data/2.5/weather?units=imperial&lat=' + lat + '&lon=' + lon + '6&APPID=' + OWM_KEY, function(apiData){
// 			//loc[0] = lat
// 			//loc [1] = lon
// 			//wd = weather data
// 			wd = apiData;

// 			render(apiData, cel);

// 			$('#toggle').click(function(){
// 				$("tempUnit").toggleClass("bold");
// 				cel = !cel;
// 				render(wd, cel);
// 			})
// 		})
// 	});

// });
