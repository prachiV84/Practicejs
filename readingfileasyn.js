//fs module is an inbuilt module which is used to read file.


//synchronous way to read the data.
/* const { error } = require('console');
const fs=require('fs')

console.log('first line'); */

/* let data=fs.readFileSync('f1.txt')
console.log('file 1 data ->'+data);
 */
console.log('first line');

//Asyschronous way to read a file.

const fs=require('fs') 

fs.readFile('f1.txt',r1)
function r1(err,data){
    if(err){
        console.log(err);
    }
    console.log('file 1 data ->'+data)
}
fs.readFile('f2.txt',r1)
function r1(err,data){
    if(err){
        console.log(err);
    }
    console.log('file 1 data ->'+data)
}
console.log('last line');