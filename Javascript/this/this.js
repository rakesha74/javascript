console.log(this); //This is pointing to the global object at this point. It outputs {}

function a(){
    console.log(this); //This also point to the global object.
    this.newVariable = 'Hello';  //As this points to the global object. So newVariable can be accessed anywhere as it attached to global object.
}

a();

var b = function(){
    console.log(this);  ////This also point to the global object.
}

console.log(newVariable);  //As it attached to global object so we can access it without dot operator

b();

var c = {
    name: 'The C Object',
    log: function(){
        this.name = 'Updated C object';  //here we can mutate the properties of object with this.
        console.log(this);  //this points to c object. The output is { name: 'Updated C object', log: [Function: log] }

        var setname = function(newname){
            this.name = newname;        //here newname sets to the global object not to c object. This is a kind of bug in javascript
        }

        setname('Updated again! The c object');
        console.log(this);  //it outputs { name: 'Updated C object', log: [Function: log] }
    }
}

c.log();

console.log(name);  //It outputs Updated again! The c object

var d = {
    name: 'The C Object',
    log: function(){
        var self = this;  //here object copied by reference as the right hand side is object.

        self.name = 'Updated C object';
        console.log(self);

        var setname = function(newname){
            self.name = newname;     //by this way we can reduce the bug as self is pointing to d object not the global object.
        }

        setname('Updated again! The c object');
        console.log(self);    //So output will be { name: 'Updated again! The c object', log: [Function: log] }
    }
}

d.log();