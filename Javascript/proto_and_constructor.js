function Person(firstname,lastname){
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked');
}

Person.prototype.getFullName = function(){
    return this.firstname+' '+this.lastname;
}

var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane','Doe');
console.log(jane);

Person.prototype.getFormalFullName = function(){
    return this.lastname+', '+this.firstname;
}

console.log(john.getFormalFullName());

//When object is constructed by new Operator then object proto is equal to function proto means john.__proto__= Person.__proto__
//We define methods with proto it decreases the memory overload as if we define method inside function then all objects will have the copy of method
//while if we define with function proto then only one copy will be there and it can be used by every object that is created by that function.

//we can define different methods also later in the code and it can be shared by all the objects that is created by that function.

//Function constructor is that function which will not return any object it will automatically be returned by javascrfipt because of the new keyword.
//and new keyword will create empty object that is filled by function constructor using this and that is returned by function constructor.

//For more information check the output.

//If you forget to add new before calling function constructore then all the objects will be undefined and if the properties you are calling on that object
//will make program crash so better to give function constructor name start with capital letter. So later we can recognise it is the function constructor
//So if forgot to add new then we can add.