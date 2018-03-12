//unable to initialize counter to first argument
function counter (count) {
    //this.count = count;
    var actuallyCount = function () {
      count++;
      return count;
    }
    //returns the function
    return actuallyCount;
  }



var counter3 = new counter(4);
console.log(counter3());