let person1={
   firstName:'steve',
   lastName:'Rogers',
   age:122,

   
}
let printDetails= function(city){
    console.log(`hi i am ${this.firstName} ${this.lastName} and i am ${this.age} year old , i am from ${city}`);
   }

let person2={
    firstName:'uyytre',
   lastName:',jshiuhbsjh',
   age:122,


   //we need this function/method but we are repeating this.so we can get a class and can create constructor and inside it we can 
   // object and we can use it.
   /* printDetails: function(){
    console.log(`hi i am ${this.firstName} ${this.lastName} and i am ${this.age} year old`);
   } */
}

//call method:to call or get the function from another object(borrow).

printDetails.call(person2,'newyork')
/* person2.printDetails() */

printDetails.apply(person2,['newyork'])//always pass the argument in the array.

//bind : to store and call it later.

let myfun =printDetails.bind(person2,'newyork')
console.log(myfun);

myfun()


