//Loops are used to print the data one by one or to perform repeatative tasks.

//1.for loop
 const array=[12,13,14,15,16]
 const array1=[]
/* for (let i = 0; i < array.length; i++) {
    array1.push= array[i]++;
    console.log( array1);
} */
 
/* `let j=0
while (j<array.length) {
    console.log(array[j]);
}j++;` */


/* let k=0;
do {
    console.log(array[k]);
} while (k<array.length);
 */

// 4.for-in loop:  iterates overall enumerable string properties of a object (ignoring properties keyed by symbols [refer mdn for more details])
var Colors={
    primary:'blue',
    secondary:'red',
    tertiary:'white'
}
for (const color in Colors) {
    /* if (Object.hasOwnProperty.call(colors, color)) {
        const element = object[color]; */
       console.log(color +'->'+Colors[color]);//here color is a key so we are using colors[color]
        
    }


  const colorarray=['yellow','green','white','blue'] 
  for (const c in colorarray) {
    /* if (Object.hasOwnProperty.call(object, c)) {
        const element = object[c];
        
    } */
    console.log(colorarray[c]);
  }

  //for-of loop:is for any iterable values/object/string

  /* var scores=[89,90,78,78,98]

  //syntax
  for(var score of scores){
    console.log(score);//here wen are using value in for-of loop so directly we can acess 
  }

  //example to get values with its index number......

  let colours=['red','red','pink','white']

  for(var[index,colour]of colours.entries()){
    console.log(index +'->'+colour);
  }
 */

  //string.........

  var str='Scaler'

  for(var [c] of str){
    console.log(c);
  }

    




