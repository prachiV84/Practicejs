
/* constructor
The constructor method is a special method of a class for creating and initializing an object instance of that class. */

class Polygon {
    constructor() {
      this.name = 'Polygon';
    }
  }
  
  const poly1 = new Polygon();
  
  console.log(poly1.name);
  // Expected output: "Polygon"

  /* Syntax
  constructor() { /* … */ /* }
constructor(argument0) { /* … *//*  }
constructor(argument0, argument1) { /* … */ /* }
constructor(argument0, argument1, /* …, */ /* argumentN) { /* … */

class Person {
    constructor(name) {
      this.name = name;
    }
  
    introduce() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const otto = new Person("Otto");
  
  otto.introduce(); // Hello, my name is Otto