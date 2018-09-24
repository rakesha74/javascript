function greet(whattosay){
    return function(name){
        console.log(whattosay+' '+name);
    }
}

var sayHi = greet('Hi');
sayHi('Tony');


//Closure is a phenomenon in which all the variable inside the scope or outside the function scope is accessible.
//as the variable remains in the memory space even though the outer function is gone so it can be accessible.