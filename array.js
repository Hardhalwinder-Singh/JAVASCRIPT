// import * as basics from "./Basics.js";
// import { Basics } from "./Basics.js";
import { person } from "./objects.js";
console.log("firssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss" + person.firstName);
// NOTE : let keyword has scope of  {} and var has scope of global/functional and const as let but cannot be change

let array = [1,2,3,4,5];
array.push(6); // adds an element to the end of the array
console.log(array);

array.pop(); // removes the last element of the array
console.log(array); 

array.unshift(0); // adds an element to the beginning of the array
console.log(array);

array.shift(); // removes the first element of the array
console.log(array);

array.splice(2, 0, 10); // adds an element at index 2 without removing any elements
console.log(array); 

console.log(array.length);
array.splice(1, 1); // removes the element at index 1
console.log(array);

array.indexOf(10); // returns the index of the first occurrence of 10
console.log(array.indexOf(10));

console.log("value at 1 : " + array[1]);

array.splice(1,2); // removes 2 elements starting from index 1
console.log(array);

array.splice(1,0,20); // adds the element 20 at index 1
console.log(array);

array.splice(1,3,20);   // removes 3 elements starting from index 1 and adds the element 20 at index 1
console.log(array);

array.push(30,40,50); // adds multiple elements to the end of the array
console.log( " BEFORE SUMM OF ALL ELEMENTS : " + array);
console.log(array.reduce((accumulator, currentValue) => accumulator + currentValue)); // sums all the elements in the array
//means acc= acc+currentValue



let scores = [90, 44, 70, 77];
let arm = [1,2,3]
console.log(scores.filter(n=>n%2==0));
console.log(scores.concat(arm));


//Map function
console.log(scores);
console.log(scores.map(n=>n+4));
console.log(scores.reduce((temp, iteratedValues)=> temp + iteratedValues));


// sorting int and strings

let dsa = [6,2,7,5];
dsa.sort();
console.log(dsa);

dsa = [];
console.log("Empty Array : " + dsa)


let sortingArray = [9,5,3,2,7,8,55,33]
console.log(sortingArray.length);
console.log(sortingArray.indexOf(33))

for(let i=0;i<sortingArray.length;i++)
{
    for(let j=0;j<sortingArray.length-1;j++)
    {
        if(sortingArray[j]>sortingArray[j+1])
        {
            let temp = sortingArray[j];
            sortingArray[j]=sortingArray[j+1];
            sortingArray[j+1]=temp;

        }
    }
   
}
console.log(
 "SORTED ARRAY : " + sortingArray);



const obj1 = {gag : "Harry",
    aggge : 22
};
const obj2 = {name : "Lol",
    age : 25
};

const obj3 = { ...obj1, ...obj2};
console.log(obj3);

 function greet () {
    let c= obj1.gag;
    console.log("Hello : " + c);
}
greet();

let spArray = [1,2,3,4,5];
let adArray = [32,432,432,432];

console.log(...spArray); //The spread operator (...) "spreads out" the contents of an array or object into individual elements.
console.log(adArray);
console.log(typeof([...spArray]));
console.log(typeof([adArray]));
console.log(adArray + ',' +[...spArray]);