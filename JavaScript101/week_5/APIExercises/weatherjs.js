"use strict";

(function() {
	//the url and apiKey are the main things that will change with your api calls
	var url = "http://api.openweathermap.org/data/2.5/weather?q=The Woodlands,Texas";
	var apiKey = "9361bd03ec7175e9eea92fdf7a717518"; // Replace "APIKEY" with your own API key; otherwise, your HTTP request will not work
	//global variable because several functions use it
	var httpRequest;
	makeRequest();

	// create and send an XHR request
	function makeRequest() {
		//create instantiated object to use methods of XMLHttpRequest with . notation
		httpRequest = new XMLHttpRequest();
		// onreadystatechange is method of XMLHttpRequest or javascript 
		//responseMethod has no arguments so dont have to use () after responseMethod
		//setting a property of httpRequest
		httpRequest.onreadystatechange = responseMethod;
		//opening communication with api, taking two parameters 'GET' 
		httpRequest.open('GET', url + '&appid=' + apiKey);
		httpRequest.send();
	}
	// handle XHR response
	function responseMethod() {
		//waiting to see response of server, 4 means it is ready
		if (httpRequest.readyState === 4) {
			//status of 200 is good to proceed
			if (httpRequest.status === 200) {
				//better to create function for code that occurs if success connecting to api
				updateUISuccess(httpRequest.responseText);
			} else {
				updateUIError();
			}
		}
	}
	// handle XHR success
	function updateUISuccess(responseText) {
		var response = JSON.parse(httpRequest.responseText);
		console.log(response);
		var condition = response.weather[0].main;
		var degC = response.main.temp - 273.15;
		var degCInt = Math.floor(degC);
		var degF = degC * 1.8 + 32;
		var degFInt = Math.floor(degF);
		var weatherBox = document.getElementById("weather");
		weatherBox.innerHTML = "<p>" + degCInt + "&#176; C / " + degFInt + "&#176; F</p><p>" + condition + "</p>";
	}
	// handle XHR error
	function updateUIError() {
		var weatherBox = document.getElementById("weather");
		weatherBox.className = "hidden";
	}
})();