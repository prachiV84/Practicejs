let obj={
    name:"prachi",
    age:22,

}
console.log(obj);
console.log(obj.hasOwnProperty('gender'));

let myobj={

}
console.log(myobj);

//Protypical inheritance or  prottypical object

function person1(name,age){
    this.name=name;
    this.age=age

    person1.prototype.getNameAndAge=function(){
        console.log(`i am $(this.name) and my name is $(this.age)`);
    }
}

let person4=new person1('kjjnhnf',88);
let person3=new person1('steve',76);

console.log(person4);
console.log(person3);