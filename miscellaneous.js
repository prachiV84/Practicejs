//double equal to and triple equal to.

let a=2;

let b='2';

console.log(a==b);//here only values are checked not the type type can be anyhting if the value is same.
console.log(a===b);//it checks value and type of variable also

//Thruthy and Falsy values.

let c='7';

if(c){
    console.log('i am truthy');
}
else{
    c
}

// falsy values....
// 0(value)
// -0(minus zero)
// 0n(BigInt zero)
// '',"",``,(empty string)
// null
// undefined
// NaN

//or else every value will return truthy value.


//Primitive DataTypes.

let firstperson={
    name:'adam',
    age:32
}

let secondperson=firstperson
firstperson='steve'

console.log('First :'+firstperson);
console.log('Second :'+secondperson);

//shallow copy and deep copy...................

let f={
    name:'adam',
    age:11,

    address:{
        city:'delhi',
        pincode:1234
    }
}

//to creATE SHALLOW COPY.
/* let s={...f}

console.log(f);

f.name='steve' */

let s=JSON.parse(JSON.stringify(f))

s.address.city='lucknow'

console.log(f);
console.log(s);

//Closures

//lexical scope function defined inside a function have all the acesses to the variable of parent function.but parent function does'nt have acesses towards
// child function.

function test(){

    let v=998;
    function test1(){
        console.log(v);
    }
    return test1
}

let fun=test()
console.log(fun);
fun()

function greet(){
    let name='Prachi';
    
     function displayName(){
        console.log('hi'+name);
        let agee=22;
     function displayAge(){
        console.log('hi'+agee);
     }
     return displayAge
    }
     return displayName
}
let greet1=greet()
console.log(greet1);
greet1()
let g2=greet1()
g2()


/* let sum=function(x,y){
    console.log(x+y);
}
sum(2,3) */

let sumc=function(x){
    return function(y){
        console.log(x+y);
}
}

let sumTwo=sumc(2)

sumTwo(4)


//typeof

let ac=9;

console.log(typeof ac);


let bc='kjhh'
console.log(typeof bc);

let arr=[9,0,0,9,0]

console.log(typeof arr +'array');

let objj={
    name:'fwefdv'
}

console.log(typeof objj);


let arra=[9,8,7,65,0]
let p=2;

let checkforarray=Array.isArray(p)

console.log(checkforarray);