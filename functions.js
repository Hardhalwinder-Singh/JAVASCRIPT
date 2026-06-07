
let sum = add(2,2);
console.log(sum);

function add(a,b)
{
    return a+b;
}


//Anonymous function - no name function

let functionName = function(c,d)
{
    return c+d;
}


let functionNumber = (c,d) =>
{
    return c+d;
}

console.log(functionName(2,9));
console.log(functionNumber(2,0));

