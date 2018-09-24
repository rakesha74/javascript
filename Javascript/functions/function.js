//First class function: Everything you can do with other types you can do with functions
//like assign them to variables, pass them to another function, create on fly.

//It is as special type of object.
//Javascript can have anonymous function i.e. function without the name

//All the code that you will write in function is set to CODE property of function
//means function is an object whose property is code that we have written inside function.
//and the code property is invocable.

function greet(){
    console.log('hi');
}

greet.language = "english"; // As function is object so we can do like this as we can do with other objects.

console.log(greet);
console.log(greet.language);