function printFirstName(firstname,cb){
    console.log(firstname);
    cb('rogers')
}
/* printlastName('steve',printlastName)
 */
function printlastName(laststname){
    console.log(lastname);
}
/* printlastName('rogers') */

printfirstName('steve',printlastName)
