class Person{

    constructor(n,a)
    {
        this.firstName=n;
        this.age=a;
    }

//get and set are properties
get name(){
    return this.firstName;
}


set namee(param){
    this.firstName=param;
}


//MEthods is kind of function
 methodName(){
    return this.firstName;
}



}

let person=new Person();

// person.namee="insideeeee";
console.log(person.name);
person.namee="ollaaa";
console.log(person.name);

console.log(person.methodName());


export {Person};