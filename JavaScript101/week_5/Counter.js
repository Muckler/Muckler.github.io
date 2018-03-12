//why does counter not
function counter () {
    var count = 0;
    var actuallyCount = function () {
      count++;
      return count;
    }
    //returns the function
    return actuallyCount;
  }
 var counter1 = new counter();
 var counter2 = new counter();
  console.log(counter1());
   console.log(counter1());
   console.log(counter2());

