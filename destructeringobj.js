let myobj={
    name:'asdfg',
    age:21,
    gender:'female',
    address:{
        country:'india',
        city:'xyzz'
    }
}

let{name:n,age:a,gender:g,address:{country:c}}=myobj
console.log(n);
console.log(a);
console.log(g);

console.log(c);