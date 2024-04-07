var a=8;
//pure function :here in pure function we are not using any external factor and we are using only parameter so whenever use pass
//any argument ,i,e for same same argument it will evaluate and give same result.
function add(x){
    console.log(x+8);
}
add(2)//same input same output.

//impure function bez at same value passed we are not getting same output.
function addd(y){
    console.log(y+a);
    a++

}
add(2)

addd(2)//for same input output can be different.
addd(2)
addd(2)
