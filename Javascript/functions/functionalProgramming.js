// var arr1 = [1,2,3];
// console.log(arr1);
//
// var arr2 = [];
//
// for(var i=0;i<arr1.length;i++){
//     arr2.push(arr1[i]*2);
// }
//
// console.log(arr2);


//****************************************************************************************
//above code can be rewritten using functional programming like that

function mapForEach(arr,fn){
    var newArr = [];
    for(var i=0;i<arr.length;i++){
        newArr.push(
            fn(arr[i])
        )
    };

    return newArr;
}

var arr1 = [1,2,3];
console.log(arr1);

var arr2 = mapForEach(arr1,function (item) {   // so here we don't have to write separate for loop for each value change like multiply by 2 or 3. we can
    return item *2;                             //do by simply changing the function definition.
});

console.log(arr2);

var arr3 = mapForEach(arr1,function(item){
   return item>2;
});

console.log(arr3);


var checkPastLimit = function(limiter,item){  //we wrote this function to not to change definition of function with every value change.
    return item>limiter;
}

var arr4 = mapForEach(arr1,checkPastLimit.bind(this,1));  //we hae used bind here to preset the variable limiter to 1.
console.log(arr4);

var checkPastLimitSimplified = function(limiter){
    return function (limiter,item) {
        return item>limiter;
    }.bind(this,limiter);
};

var arr5 = mapForEach(arr1,checkPastLimitSimplified(2));
console.log(arr5);


//https://underscorejs.org/docs/underscore.html---try to go on this site and try to understand javascript concept mostly functional programming from this.
//https://lodash.com/ try this also.
