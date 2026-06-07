let person = {

    firstName:"Harry",
    lastName:"Singh",
    age:24,
    fullname : function(f, l){
       f = this.firstName;
       l=  this.lastName;
        return f+l;
    }
}
let human = {

    firstName:"olaaa",
    lastName:"it"
}


console.log(person.firstName);
console.log(person['lastName']);


console.log({...person, ...human});

let person2 = {...person, ...human};
console.log(person2);


person.manyName="hewwwww";

console.log(person.manyName);

delete person.manyName;


console.log(person);

console.log("manyName" in person);

for(let key in person)
{
   console.log(person[key]);
}


console.log(person.fullname());


export {person};