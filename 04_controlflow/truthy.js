const useremail="diptipathak019@gmail.com";
if(useremail){
    console.log("Email is present");
}else{
    console.log("Email is not present");
}
// Truthy and Falsy Values in JavaScript

// In JavaScript, values can be categorized as either truthy or falsy.
// Truthy values are those that evaluate to true in a boolean context.
// Falsy values are those that evaluate to false in a boolean context.

// Falsy values include:
// 1. false
// 2. 0 (zero),-0,BigInt 0n
// 3. "" (empty string)
// 4. null
// 5. undefined
// 6. NaN (Not a Number)

// Examples of truthy values:
// 1. true
// 2. Any non-zero number (e.g., 1, -1)
// 3. Any non-empty string (e.g., "hello")
// 4. Objects (e.g., {}, [])
// 5. Arrays (e.g., [1, 2, 3])

// You can test values in an if statement to see if they are truthy or falsy.

// const useremail2="";
// if(useremail2.length === 0){
//     console.log("Email is not present");

// }

const emptyobject = {};
if(Object.keys(emptyobject).length === 0){
    console.log("Object is empty");
}
//nullish coalescing operator(??):null undefined
let val1;
//val1=5??10;
console.log(val1); // Output: 5
//val1 = null ?? 10;

console.log(val1); // Output: 10
val1 = undefined ?? 10;
console.log(val1); // Output: 10
val2 = null ?? 20 ?? 10;
console.log(val2); // Output: 20

//terniary operator
//condition ? expressionIfTrue : expressionIfFalse

const iceteaprice=100;
iceteaprice >50? console.log("Expensive") : console.log("Cheap");
