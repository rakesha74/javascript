Array.prototype.myCustomFeature = 'cool!';

var arr = ['Rakesh','Nikhil','Ankit'];

for(var prop in arr){  //prop is index of the array i.e. 0,1,2 For more clarification check output.
    console.log(prop+": "+arr[prop]);
}

//Don't use for in in arrays as it can iterate over prototypes also. Use simple for loop instead that wis far better.

for(var i=0;i<arr.length;i++){  // This code is safe for arrays.

}