//"use struct" it is an additional feature. Not all browser implement it in the same way. It depend on the browser.
//One disadvantage of using it is that if we use min js where all the js files minified to one file.
//If we use "use strict" in one file then it will be applicable for the files down below which is concatenated to make min.js
//All the files have to follow use strict without wanted also. This can lead to the bugs or error in code.

//"use strict"      // If we use "use strict" here then it will be applicable globally
                    //and all code will give error which are using variable without declaring.
                    //Second code will also give error.
function logNewPerson(){
    "use strict";
    var person2;
    persom2 = {};
    console.log(persom2);  //This code will give error as we are using "use strict".
                            //So it will not allow to use varibale without declaring
}

var person;
persom = {};
console.log(persom);  //This code will not give error as there is no "use strict" in this.
logNewPerson();