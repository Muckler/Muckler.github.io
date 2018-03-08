(function() {
    $('#login').submit(function(e) {
        e.preventDefault();
        var elements = this.elements;                    // Get all form elements
        var firstName = elements.firstName.value;          // Select username entered
        var msg = 'Welcome ' + firstName;            // Create welcome message
        document.getElementById('main').textContent = msg; // Write welcome message  
    })
    

})(); //self executing function