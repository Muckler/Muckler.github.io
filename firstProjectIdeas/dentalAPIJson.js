"use strict";

(function() {
	//the url and apiKey are the main things that will change with your api calls
	var url = "https://data.healthcare.gov/resource/dtk6-f38y.json";
	var apiKey = ""; // Replace "APIKEY" with your own API key; otherwise, your HTTP request will not work
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
		httpRequest.open('GET', url + apiKey);
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
        var orthoAdult = response[0].orthodontia_adult;
        console.log(response);
        var i = 0
        var totalOut = 0;
        response.forEach(function(element) {
            //remove the dollar sign from the string so can add them
            element.dental_maximum_out_of_pocket_individual_standard = element.dental_maximum_out_of_pocket_individual_standard.slice(1,);
            //convert string to an integer
            element.dental_maximum_out_of_pocket_individual_standard = Number(element.dental_maximum_out_of_pocket_individual_standard);
            console.log(element.dental_maximum_out_of_pocket_individual_standard);
            //getting the total value of out of pocket max
            totalOut = totalOut + element.dental_maximum_out_of_pocket_individual_standard;
        });
        console.log(totalOut);
        var avgOut = totalOut / response.length;
        
        var maxIndi = response[0].dental_maximum_out_of_pocket_individual_standard;
		var planName = response[0].issuer_name;
		var cleanCost = response[0].routine_dental_services_adult;
		var dentalBox = document.getElementById("dental");
        dentalBox.innerHTML = "<p>" + "Plane Name:  " + planName + "<br />" + "Out of Pocket Max:  " + maxIndi +
		"<br />" + "Cost of Dental Cleaning:  " + cleanCost + 
		"<br />" + "Ortho Coverage for Adults:  " + orthoAdult
		+ "<br />" +  "<br />"+ "<br />" + "Average Plan Out of Pocket Costs:  " + avgOut + "</p>";
	}
	// handle XHR error
	function updateUIError() {
		var weatherBox = document.getElementById("dental");
		weatherBox.className = "hidden";
	}
})();