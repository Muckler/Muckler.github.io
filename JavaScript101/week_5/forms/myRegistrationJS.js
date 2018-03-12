(function() {
    var form = document.getElementById('login');

    form.addEventListener("submit", function(e)
    {
        e.preventDefault(e);  //prevents default exectuion of /login
                    
        var elements = this.elements;                    // Get all form elements
        var firstName = elements.firstName.value;          // Select firstname entered
        var msg      = 'Welcome ' + firstName;            // Create welcome message
        document.getElementById('main').textContent = msg; // Write welcome message


    }, false);

    var fname = document.getElementById("firstName");

    // use event listener to test validity could also set reuglar expression to variable called re and test with re.test(fname.value)
    fname.addEventListener("input", function (event) {
        if (fname.validity.patternMismatch) {
            fname.setCustomValidity("Letters only please.");
        } else {
            fname.setCustomValidity("");
  
        }//end of else2
// end of function
    }, false)

})(); //self executing function
