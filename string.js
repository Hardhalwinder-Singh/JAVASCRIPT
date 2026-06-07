import { Person } from "./classes.js";

let str = "string";
console.log(str.length);
console.log(str.slice(0,5));
console.log(str[1]);
let person = new Person("hellooooooooooooooooooooooos");
// person.methodName();

console.log(person.methodName());
let perspon2 = new Person("world");
console.log(perspon2.methodName());
console.log(perspon2.name);

//We can export using two ways 
// first : at the end write -  export {what you want to export};
//second : at the start of class write - module.exports = class clasName