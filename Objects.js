const person={
    firstName:"Prachi",
    lastName:"MAgdum",
    age:22
}
console.log(person);

//Dot notation access method..
console.log(person.age);

//Bracket notation to access methods

console.log(person['firstName']);//


const cap={
    firstName:'steve',
    lastName:'qwewew',
    age:122,

    friends:["asds","sssxs","sqdsxs","sxsxas"],

    address:{
        state:"newyork",
        city:{
            name:"broklyn",
            pincode:12223
        }
    }
}
console.log(cap.friends);
console.log(cap.address.city.name);

//update
cap.age=22;
console.log(cap.age);

//delete
delete cap.address.city.pincode
console.log(cap);