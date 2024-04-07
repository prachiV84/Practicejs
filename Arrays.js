/* //creation of array.......................
var arr=[12,'prachi',true,12.4]


// accessing the array 
console.log(arr);

console.log(arr[3]);

//Replacing Elements of an array by using index

arr[1]="Porsche"
console.log(arr);

console.log(`the length of an array elements:`,arr.length);
 */
//inbuilt methods.....

var arr2=[12,13,14,15,6]

//pop():here value is removed from the last index.
arr2.pop()
console.log(arr2);

//push():here value is added at the last index.
arr2.push(100)
console.log(`pushed a array`,arr2);

//shift() :basically works like pop but it will remove the value from first.

var d=arr2.shift()
console.log(d);

console.log(arr2);

//unshift (): basically works like push(),but it will add element at the start index.

var e=arr2.unshift(24)
console.log(e);
console.log(arr2);