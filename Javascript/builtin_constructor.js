var a = new Number(3);

console.log(a);

console.log(a.toFixed(2));

//a can use toFixed function as it is available with Number.prototype.toFixed

var b = new String("John");
console.log(b);
console.log(b.indexOf('o'));

//b can use indexOf function as it is available with String.prototype.indexOf

console.log("John".length);
console.log(new String("John").length);

//Above both the statements are equal. Java understands it automatically.

String.prototype.isLengthGreaterThan = function(limit){
    return this.length > limit;
}

console.log("John".isLengthGreaterThan(3));

Number.prototype.isPositive = function(){
    return this > 0;
}

//console.log(3.isPositive()); // This statement is wrong as javascript can convert string but not numbers
console.log((new Number(-1)).isPositive()); // This statement is correct.


//***************************************************************************************************//

var a = 3;
var b = new Number(3);      //This gives objects not primitive.

console.log(a==b); // it returns true as double operator try to make them equal by converting objects into primitive
console.log(a===b); // it returns false as this opeartor doesn't try anything it simply check wheteher they are same or not.
                    // and this expresion is not same as a is primitive typr and b is object.
                    // That's why be careful to use built in constructor and it can lead to the bugs.

//moment.jsis good for dealing with dates.

