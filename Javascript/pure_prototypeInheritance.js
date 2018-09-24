//polyfill---it is the technique through which if functionality is not supported by engine then we will define that functionality by own.

if(!Object.create){
    Object.create = function(o){
        if(arguments.length>1){
            throw new Error('Object.create accepts only one parameter');
        }

        function F(){}
        F.prototype = o;
        return new F();
    };
}


var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function(){
        return 'Hi '+this.firstname;
    }
}
/*
person.prototype.getFirstName = function(){
    return this.firstname;
}
*////This commented code is wrong. as person is not having prototype as it has __proto__

person.__proto__.getFirstName = function(){
    return this.firstname;
}

var john = Object.create(person);  //This will create empty object with object(john) prototype equals to person.
console.log(john);   //It outputs {}
console.log(john.firstname); //It outputs Default

john.firstname = "Rakesh";
john.lastname = "Agarwal";

console.log(john);   // it outputs { firstname: 'Rakesh', lastname: 'Agarwal' }
console.log(john.greet()); // it outputs Hi Rakesh
console.log(john.getFirstName());
