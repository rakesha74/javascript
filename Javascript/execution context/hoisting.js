b();                //it outputs Called b! It will also throw error if function is not there.
console.log(a);     //it outputs undefined if you declare a if you don't declare a then it will throw an error.

var a = "Hello world";

function b(){
    console.log('Called b!');
}

//execution context is getting created at two phases
//1. creation phase where global object and this is getting created. Outer environment is also getting created.

//Hoising means before javascript engine runs code line by line it sets aside memory space for all the variable we have declared or the function that we have define.
//so that variables and function is exist in memory before the code begins.

//2.execution phase where all the assignment will be done.
//So therefore when we access variable a before it's assignment we will get undefined bcoz it's a default value of variable in javascript.