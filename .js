//imperative 
const a=9;
let iseven;
const asq=a*2;

if(asq%2==0){
    console.log(`yes it is  a even square`);
}
else{
    console.log(`no not a even square`);
}

//declarative

const checkforsq=(x)=>(x*x%2==0?true:false)
console.log(checkforsq(5));