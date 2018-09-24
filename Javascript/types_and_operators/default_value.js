function greet(name){
    name = name || 'Your name here';  //We use this type of expression to set default values. || operator coerced the value to boolean and it wil return that value which coerces to true.
    console.log('Hello '+name);     //For e.g. if name is undefined so it coerces to 0 and 'Your name here will return 1 so this expression will return Your name here.
                                //So if you don't pass anything even though it will return some value. || goes left to right. So whichever value gets coerces to true first from left.
                                //that will be returned.
}

greet('Tony'); //It will output Hello Tony
greet();  //It will output Hello Your name here
greet(0); //It will output Hello Your name here we have to be careful about this case. as 0 will coerced to false.