function b(){
    //var myvar;   //if i uncomment this line then myvar will be undefined. if i comment this line then myvar will be 3
    console.log(myvar);  //this output is becoz every context has a reference of outer environment. and b's outer environment is global lexically.
}
//Function b is lexiacally sitting at the global level only at par with the global environment. so it's outer environment will be global variable.
function a(){
    var myvar = 2;
    console.log(myvar);
    b();
}

var myvar = 3;
console.log(myvar);
a();
console.log(myvar);

//Scope chain is the chain of outer reference for each execution context.
console.log("********************************************");
function c(){
    function d(){
        console.log(myvar);   //it's output is 2 bcoz lexically d is sitting inside c so d outer's environment is c. and when function didn't get the variable inside the execution context
                            //it looks in outer environment.
    }

    var myvar = 2;
    console.log(myvar);
    d();
}

var myvar = 5;
c();
console.log(myvar);

console.log("*************************************************");
function e(){
    function f(){
        console.log(myvar);   //it outputs 5 bcoz as we go down to scope chain first it will look in e() it will not get the variable value then it will go for global environment
                            //there it will get the value of myvar and it will print it.
    }

    console.log(myvar);
    f();
}

var myvar = 5;
e();
console.log(myvar);

//scope means where a variable is available in your code.

//if we declare variable with let so it will block the scope i.e. you can use that variable only in that block
//not elsewhere.
//if you declare variable with let and you try to use that variable before it;s declaration it will give error
//as it will be in memory but javascript will not allow to use it before that declaration line is not executed.
//try it with latest node.js
