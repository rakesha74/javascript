;(function(global,$){  //It will save our code from previous code that is used before it. may be they left semicolon in its code.
                        //so our code will still run.
    // 'new' an object
    var Greetr = function(firstname, lastname, language){
        return new Greetr.init(firstname,lastname,language);
    }

    //hidden within the scope of the IIFE and never directly accessible.
    var supportedLanguage = ['en','es']; //This variable's lexical environment will be whole function.
                                        // This variable will remain hidden from outside world.
    //informal greetings
    greetings = {         //This greetings and formalGreetings variable will be available outside this function also.
                            //and outside function it can be accessible unlike supportedLanguage.
        en: 'Hello',
        es: 'Hola'
    }

    //formal greetings
    formalGreetings = {
        en:'Greetings',
        es: 'Saludos'
    }

    //logger messages
    var logMessages = {     //This variable will not be available for outside world.
        en :'Logged in',
        es: 'Incinio sesion'
    }

    //prototype holds methods (to save memory space)
    Greetr.prototype = {

        // 'this' refers to the calling object at execution time.
        fullName: function(){
            return this.firstname + ' '+this.lastname;
        },

        validate: function(){
            //check that is a valid language
            //references the externally inaccessible 'supportedLangs' within the closure
            if(supportedLanguage.indexOf(this.language) === -1){  //supportd Language variable is available here bcoz of closure.
                throw "Invalid Language";                           //this will point to the object that is created by new.
            }
        },
        //retrieves messages form object by referring to properties using [] syntax
        greeting : function(){
            return greetings[this.language]+ ' '+this.firstname+'!';
        },
        formalGreeting: function(){
            return formalGreetings[this.language]+','+this.fullName();
        },
        //chainable methods return their own containing object.
        greet: function(formal){
            var msg;

            //if undefined or null it will be coerced to 'false'
            if(formal){
                msg = this.formalGreeting();
            }else{
                msg = this.greeting();
            }
            if(console){
                console.log(msg);
            }

            //'this' refers to the calling object at execution time.
            //makes the method chainable.
            return this;
        },
        log: function(){
            if(console){
                console.log(logMessages[this.language]+': '+this.getFullName());
            }
            //make chainable
            return this;
        },
        setLang : function(lang){

            //set the language
            this.language = lang;

            //validate
            this.validate();

            //make chainable
            return this;
        },
        HTMLGreeting: function(selector,formal){
            if(!$){
                throw 'jquery not loaded';
            }

            if(!selector){
                throw 'Missing jquery selector';
            }

            //determine the message
            var msg;

            if(formal){
                msg = this.formalGreeting();
            }else{
                msg = this.greeting();
            }

            //inject the message in the chosen place in the DOM
            $(selector).html(msg);

            //make chainable
            return this;

        }
    };

    //the actual object is created here, allowing us to 'new' an object without calling 'new'
    Greetr.init = function(firstname,lastname,language){
        var self = this;
        self.firstname = firstname || '';
        self.lastname = lastname || '';
        self.language = language || 'en';

        self.validate();
    }

    //trick borrowed from jQuery so we don't have to use the 'new' keyword
    Greetr.init.prototype = Greetr.prototype;

    //attach our Greetr to the global object, and provide a shorthand '$G' for ease our poor fingers.
    global.Greetr = global.G$ = Greetr;

})(window,jquery);   //we create IIFE inside () becoz to trick syntax parser as it doesn't allow function expression to be written alone
                    //omly function statement is allowed to written like that.
                    //i used iife to not to make collide variable names and context variables from other libarary.





/******************************************************************************************/
//How to use above library. This code should be in app.js
var g = G$('John','Doe');
g.greet().greet(true); //it outputs Hello John! \n Greetings, john Doe
                        //This chaining is possible bcoz greet return this.
