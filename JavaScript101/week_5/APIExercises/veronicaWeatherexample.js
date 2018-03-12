//requires you to define variables
"use strict";`
]
                     `

// jQuery request
//self invoking function
(function() {
	var url = "http://api.openweathermap.org/data/2.5/weather?q=Houston,Texas";
	var apiKey = "9361bd03ec7175e9eea92fdf7a717518"; // Replace "APIKEY" with your own API key;



// get is a jQuery function
	$.get(url + '&appid=' + apiKey).done(function(response) {
		console.log(response);
        //response is a json object and jQuery converts the string for you
        // call function with response
        updateUISuccess(response);
	}).fail(function(error) {
		console.log(error);
		updateUIError();	
	});

// 	// handle XHR success
function updateUISuccess(response) {
		var condition = response.weather[0].main;
 		var degC = response.main.temp - 273.15;
 		var degCInt = Math.floor(degC);
 		var degF = degC * 1.8 + 32;
		var degFInt = Math.floor(degF);
// //		var weatherBox = document.getElementById("weather");
// //		weatherBox.innerHTML = "<p>" + degCInt + "&#176; C / " + degFInt + "&#176; F</p><p>" + condition + "</p>";
    	var $weatherBox = $('#weather');
 		$weatherBox.append("<p>" + degCInt + "&#176; C / " + degFInt + "&#176; F</p><p>" + condition + "</p>");
	}

// 	// handle XHR error
function updateUIError() {
//		var weatherBox = document.getElementById("weather");
//		weatherBox.className = "hidden";
 		var $weatherBox = $('#weather');
 		$weatherBox.addClass('hidden');
}
//end of self invoking function
})();