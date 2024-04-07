var a=20;
var a=35;

//solution for redeclaration...
let b=30;


console.log(a);
console.log(b);

// variable declared with var keyword are blocked scoped.
if(a==35){
 let c=40
}
   /*  console.log(c); *///we cannot acess here outside the scope

//reassigning is  allowed using let.

let d=300
d=301
console.log(d);

//reassigning is not allowed using const keyword.

const e=300
e=301
console.log(e);


    