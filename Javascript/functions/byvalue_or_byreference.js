//by value (primitive)
//In case of primitive the value is getting copied by value. if you pass to a function or assign directly.
var a = 3;
var b;

b=a;
a=2;

console.log(a) ;  //It outputs 2
console.log(b);   //It outputs 3

//by reference (all Objects (including functions))
//In case of objects the value is getting copied by reference. If you pass to a function or assign directly.
var c = {greeting:'Hi'};
var d;

d = c;  //Here right side value exists in the memory so equal sign doesn't give new memory
        //just d points to c location.
c.greeting = 'Hello';

console.log(c);  //It outputs {greeting:'Hello'};
console.log(d);     //It outputs {greeting:'Hello'};

function changeGreeting(obj){
    obj.greeting = 'hola';
}

changeGreeting(d);

console.log(c);   //It outputs {greeting:'Hola'};
console.log(d);     //It outputs {greeting:'Hola'};

//equal operator sets up new memory space (new address)
c = {greeting:'howdy'};  //As right side value don't exist in the memory. So equal operator will give new memory to c.
                        //So it will not be copied by reference so d value will not change. as c is changing the location
                        //and d will point to old location

console.log(c);
console.log(d);


