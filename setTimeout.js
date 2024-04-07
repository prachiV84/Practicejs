//setTimeout: will take a callback and a interval i.e setTimeout(cb,2000)

console.log('before');
function greet(){
    console.log('Hello from the setTimeout');
}

setTimeout(greet,5000)

console.log('after');

//setInterval: it will set a interval and after some time it will repeatedly execute.



let timer= setInterval(greet,1000) 

setTimeout(function(){
    clearInterval(timer)
},3000)

