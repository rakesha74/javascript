function getPerson(){
    return
    {
        name:'Rakesh'
    }
}

console.log(getPerson());   //It outputs undefined. It's because of syntax parsers. Syntax parser automatically inserts semicolon wherever it is
                            //necessary. As after return statement carriage return is there so it put automatically semicolon there. bcoz according to syntax it should be there.


function getPerson_1(){
    return {
        name:'Rakesh'
    }
}

console.log(getPerson_1());  //It outputs the expected result as we told syntax parser that we have started an object by placing paranthesis. so semicolon is not inserted.