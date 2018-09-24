function buildFunctions(){
    var arr = [];

    for(var i=0;i<3;i++){
        arr.push(function(){
           console.log(i);
        });
    }

    return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();



function buildFunctions2(){
    var arr = [];

    for(var i=0;i<3;i++){
        //let j= i;  For ES6
        arr.push(function(){
            console.log(i);
            // console.log(j); //For ES6
        });
    }

    return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();

function buildFunctions3(){
    var arr = [];

    for(var i=0;i<3;i++){
        //let j= i;  For ES6
        arr.push(
            (function(j){
            return function(){
                console.log(j);
            }
        }(i))
        )
    }

    return arr;
}

var fs3 = buildFunctions3();

fs3[0]();
fs3[1]();
fs3[2]();

