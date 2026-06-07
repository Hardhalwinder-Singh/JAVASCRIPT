import { Person } from "./classes.js";

class Child extends Person{

    constructor(no, ae){
        super("Hello World!" , 22);
        this.no=no;
        this.ae=ae;
        
    }

   bark() {
        console.log(this.no + this.ae + " barks!"); // this.name works because of super()
         console.log(this.firstName + this.age + " barks!"); // this.name works because of super()
    }

}

let child = new Child("childaa", 23);

console.log(child.no + child.ae);
child.bark();