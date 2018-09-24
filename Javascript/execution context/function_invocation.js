function a(){
    free = "Hello"; //free attached to the global object.
    console.log(a);
    console.log(free);  //in this case if free is not declared also it will work.
    b();
    var a="Hello world";

    function b(){
        console.log("b");
    }
}

a();
var free = "free";

//hoisting is applicable inside function also.
//this code will not give error.