function fun(greet) {
    console.log(greet);
}

function call3Times(fun1) {
    fun(fun1);
    fun(fun1);
    fun(fun1);
  }
  var saying = 'hello world';
  call3Times(saying);