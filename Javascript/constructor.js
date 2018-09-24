function Person(){
    console.log(this);
    this.firstname = 'John';
    this.lastname = 'Doe';
    console.log('This function is invoked.');
}
//The above function is called constructor as it is not returning anything and setting the empty object this as new creates empty object.
var john = new Person();
console.log(john);

function Person_temp(){
    this.firstname = 'Rakesh';
    this.lastname = 'Agarwal';

    return {greetings:'Hello Rakesh'};
}
//If we retrurn something from constructor function then it will not be Person_temp it will be object that is send by function.
var raka = new Person_temp();
console.log(raka);

//Function constructor points to empty object and that object is returned from function automatically.

function Person_withArgs(firstname,lastname){
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked');
}

var nikhil = new Person_withArgs('nikhil','agarwal');
console.log(nikhil);