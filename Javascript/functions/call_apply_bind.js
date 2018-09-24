//Objects have properties and methods.

var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function(){
        var fullname = this.firstname + ' '+this.lastname;
        return fullname;
    }
}

// getFullName = function(){
//     return 'Rakesh';
// }


var logName = function(lang1, lang2){
    console.log('Logged: '+this.getFullName());
    console.log("arguments: "+lang1+" "+lang2);
}

//logName();  //this will give error as this points to global object and no getFullName is there in global execution.
//to make this we have to define getfullName in global execution like above.

var logPersonName = logName.bind(person);
logPersonName('en','es'); //Now it wil work bcoz of bind. bind will replace pointing of this variable from global to person
//bind make the copy of function and assign to variable with this variable modification. That's why we can pass arguments on logpersonanme same as logname.

//we can write above code like below also

var logName_1 = function(lang1, lang2){
    console.log('Logged: '+this.getFullName());
}.bind(person);


logName.call(person,'en','es');  //Call wil execute the function and it will aslo change this variable from gloabal to person object.
                                //and it can pass the arguments also.
//bind do not execute the function. it just create the copy of function
//while call executes the function.


logName_1();

logName.apply(person,['en','es']);  //call and apply is near about same. Only differnece in passing the arguments.
                                    //apply pass the arguments as array.

(function (lang1,lang2) {
    console.log('Logged: '+this.getFullName());
    console.log("arguments: "+lang1+" "+lang2);

}).apply(person,['en','es']);



//**************************************************************************************//
//function borrowing

var person2 = {
    firstname: 'Jane',
    lastname: 'Doe'
}

console.log(person.getFullName.apply(person2));  //Here person2 is borrowing person function using apply
                                                    //It can done using call also.

//function currying----creates a copy of a function but with some preset parameter. useful in mathematical situation.
function multiply(a,b){
    return a*b;
}

var multiplyByTwo = multiply.bind(this,2);  //if you pass arguments to the bind function it made that argument value permanent
                                            //like a =2 permanently. Now you don't have to pass value a. if you give two argumnet to bind
                                            //a nd b will be permanent and if we pass argument to function then it will be extra parameter for that function.
console.log(multiplyByTwo(4));

