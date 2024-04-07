/* Higher order function:are function that operate on other function  or either by taking them as argument or by returning them.HigherIn simple words 
                   A higher order function is a function that recieves a function asa an argument or returns the function as output. */

            /* callback function will be passed to another function but higher order function will recieve the function.
            higher order function are used nto shift the task to another function. */

//normal way to square
    let arr=[1,2,3,4,5]
    let squareArr=[]
    
    for(let i=0;i<arr.length;i++){
        squareArr.push(arr[i]*arr[i])
    }

    console.log(squareArr);

 //map:will directly iterate the array and eternally creates a empty array.
 //map will loop through every element and will perform operation.
 //map will return the same thing i.e if arrays we have passed to iterate it will return array only.
 //map is used to apply a function on every item in an array.
 //map syntax:
        /* array.map(function_to_be_applied)
        array.map(function(args){
            // code.
        }) */
 
 const num=[1,2,3,4,5]

 const squaredNum=num.map(function(n){
          return n*n
 })

 console.log(squaredNum);

 const transaction=[1000,2000,3000,4000,5000,6000]

 const intodollar=80;

 let transactioninDollars=transaction.map((amount)=>{
    return ((amount/intodollar).toFixed(0));
 })

 console.log(transactioninDollars);
 console.log(transaction);


 //foreach will never return anything,but the foreach will evalute and return a value out of it.
 let transactioninDollar=transaction.forEach((amount)=>{
    return ((amount/intodollar).toFixed(0));
 })

 console.log(transactioninDollars);
 console.log(transaction);

 //filter : will create a new array from existing one and only those items are printed that satisfy the condition of the function. 

  /* syntax:
        array.filter(function_to check_cond()={
            //code or condition
        })
         */
     
    let num1=[1,2,1,23,24,24,5,6,7]
      
     let evennum=num1.filter((x)=>{
        return x%2==0;
     })
     console.log(evennum);

 //reduce: 
 
 let result = num1.reduce(function(accumulator,value){
    let updatedsum=accumulator+value
    return updatedsum
 },0)

 console.log(result);

 let product=num1.reduce(function(accumulator,value){
    let updatedsum=accumulator*value
    return updatedsum
 },1)
 console.log(result);

 //chaining:taking a method and pass it to another method.

 let maleages=arr.filter(function(x){
    return x.ages=='m'
 }).map(function(y){
    return y.age
 })