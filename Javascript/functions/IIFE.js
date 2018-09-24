greet('John');

//function statement

function greet(name){
    console.log('Hello '+name);
}
//As above greet function is a function statement javascript will put this in memory


//using a function expression
var greetFunc = function(name){
    console.log('Hello '+name);
}


//greetFunc is using function expression javascript will not put this in memory.
//it will create function object on the fly when greetFunc is used.
//So you can use greet before greet function statement but you can't use greetFunc before greetFunc variable which is assigned by function expression.
greetFunc('John');

//using an Immediately Invoked Function Expression (IIFE)

var greeting = function(name){
    return 'Hello '+name;
}('john');

console.log(greeting);
//IIFE is invoked there only no need to invoke at some other place.

3; //These are valid syntax in javascript
"I'm a string"; //this also

var firstname = 'John';

(function(name){
    var greeting = 'Inside IIFE:Hello';
    console.log(greeting+' '+name);
}(firstname));

//we have put function expression inside () because to fool syntax parser. Parser thinks that inside () there will be an expression
//so we have put function expression. If we don't put function expression inside () then function expression is not valid
//because javascript syntax parser will think it as a function statement it need name of it. we can't define anonymously.
//as javascript sees function keyword after any ; it will think that statement as function statement.
//so function expression should be () to be used as a IIFE.

//above and below code are same. It's the way of writing
(function(name){
    var greeting = 'Inside IIFE:Hello';
    console.log(greeting+' '+name);
})(firstname);


//variables and function statements goes into the global execution statement.(Hoisted)


var greeting_temp = "Hello";

(function(name_temp){
    var greeting_temp='Hola';
    console.log(greeting_temp+' '+firstname);  //it will output Hola John as the greeting_temp it is accessing in the IIFE execution environment
                                                //both greeting_temp have different execution environement.
})(firstname);

console.log(greeting_temp);   //It will output Hello as greeting_temp what this line is accessing is in global execution environment







