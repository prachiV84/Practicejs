//promises:an event to perform 
// 1. pending state
//2.fulfilled  3.rejected  4.setteled.

//How to create a promise.

//1.create a variable.
let myPromise=new Promise(function(resolve,reject){
    const a=4
    const b=4

    setTimeout(()=>{
        if(a==b){
            resolve('the value are equal')
        }
        else{
            reject('the value are not equal')
        }
    },3000)
})

console.log(myPromise);

//if promise is fulfilled.....
myPromise.then(function(result){
    console.log(result);
})

//promises are rejected
myPromise.catch(function(fresult){
    console.log(fresult);
}) 

//at last either the promise is rejected or fulfilled promise get setelled.


function placeOrder(drink){
    return new Promise(function(resolve,reject){
        if(drink=='coffee'){
            resolve('order for coffee is recieved')
        }
        else{
            reject('other order rejected')
        }
    })
}

function processOrder(order){
    return new Promise(function(resolve){
        console.log('order is being processed');
        resolve(` ${order} is served`)
    })

    placeOrder('coffee').then(function(orderPlaced){
        console.log(orderPlaced);
        let orderIsProcessed=processOrder(orderPlaced)
    }).then(function(processOrder){
        console.log(processOrder);
    })
    placeOrder('coffee').catch(function(orderPlaced){
        console.log(orderPlaced);
    })
}

//asyn await:both the words are keywords.

 async function serverOrder(){
    try{
    let orderPlaced= await placeOrder('coffee')
    console.log(orderPlaced);
    let processOrder=processOrder(orderPlaced)
    console.log(processOrder);
 }  catch(err){
    console.log('error');
 }
 }
 serverOrder()

