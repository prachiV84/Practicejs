/* var a=21; */
var a=35;//redeclaration of a variables.

console.log(a);



//Scoping issue:variable declared with var keyword are not blocked scoped they are function scoped.
if(a==35){
var b=40;
}
console.log(b);

function test(){
    var c=100;
    console.log(c);
}
test()
console.log(c);//here we can acesses