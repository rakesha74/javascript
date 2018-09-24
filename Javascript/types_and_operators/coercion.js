//coercion means converting a value from one type to another.
console.log(3<2<1); //It outputs true.

console.log(false<1);  //as < operator has left to right associativity

console.log(0<1); //bcoz of coercion the above statement becomes this as Javascript will convert
                    //false to zero.


console.log(Number(undefined));  //It outputs NaN(Not a number)

console.log(Number(null)); //It outputs 0.

console.log("3"==3);  // it outputs true bcoz of coercion it will convert string 3 to number.

console.log(false == 0); //it again output true bcoz of coercion.

console.log(null == 0);  //it outputs false. null don't become zero only with equality operator.
                        //it create confusion.

//more example of confusion bcoz of coercion
console.log("" == 0); //true
console.log(""==false); //true

//example of triple equal operator i.e. strict equality.
//strict equality check the value is equal or value is of same type with equal value.
//if the value is of two different type then it will return false
//it wil return false also when the values are not equal.
//coercion will not happen in strict equality.
console.log("3"===3) //it will give false
console.log(3===3) //it will return true.

//*****************************************************************************************
//all statemets has the output false because of coercing.
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(""));

//undefined or null represents lack of existence.

var z;

if(z){  //whatever expression inside if paranthesis if will try to coerce that expression into boolean.
    console.log("Something is there");   //if z is undefined or null or "" this statement will not print.
}                                       //if z has some value then it will be printed.
