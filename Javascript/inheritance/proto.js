var person = {
    firstname:'Default',
    lastname:'Default',
    getFullName:function(){
        return this.firstname+' '+this.lastname;
    }
}

var john = {
    firstname:'John',
    lastname:'Doe'
}

//don't do this ever!!!! For demo purpose only.
//What is the use of prototype

john.__proto__= person;
console.log(john.getFullName());
console.log(john.firstname);

var jane = {
    firstname:'Jane'
}

jane.__proto__=person;
console.log(jane.getFullName());


//for in loop each member of the object and the prototype member also

for(var prop in john){
    if(john.hasOwnProperty(prop)){  //hasOwnProperty will check whether the property belongs to object not in prototype.
        console.log(prop+': '+john[prop]); //in hasOwnProperty will give false to prototype properties and will give true to it's own property.
    }
}