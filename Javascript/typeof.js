var a = 3;
console.log(typeof a); //outputs number

var b = "Hello";
console.log(typeof b);

var c = {};
console.log(typeof c);

var d = [];
console.log(typeof d); //Outputs object rather than array
console.log(Object.prototype.toString.call(d));  //to get [object Array] as output rather than object.

function Person(name) {
    this.name = name;
}

var e = new Person('Jane');
console.log(typeof e);
console.log(e instanceof Person);  //instanceOf will check whether e has person in prototype chain.

console.log(typeof undefined);
console.log(typeof null); //Bug in javascript.