greet();  //This phenomenon is called hoisting. As javascript put declaration in the top of the code wherever it be so we can use here the function greet.

function greet(){   //This code is called as function statement
    console.log('Hi');
}


var anonymousGreet = function(){  //This is called as function expression. as it is returning some value to variable.
                                    //value is function object.
    console.log('Hi');
}
console.log(typeof anonymousGreet);  //this will result as function
anonymousGreet();

//As javascript see function then it puts functions into the memory before execution starts
//as it put variable also in the memory  with the value undefined before execution starts.
//So if we put anonymousGreet() statement before defining then it will give error. as it's value is undefined and we are using like a function.

//Function expression are not hoisted but function statements are.


function log(a){
    console.log(a); //this will print whole [Function]
    a(); //This will print hi
}

log(function () {
   console.log('hi');
});

