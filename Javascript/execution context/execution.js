console.log(global)  //here a_ will not be in global
//this.a = "Hello world";
//
//
//console.log(a);

//The above code will give error.

global.a_ = "Hello world";

console.log(a_);

//The above code will run fine


function b_(){
    this.free = "free";
}
b_();
console.log(global);  //global wil have reference of a_ and free also now but not of b
console.log(this);  //it is empty
console.log(free)  //it will output free